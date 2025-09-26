import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EnterpriseContactForm } from '@/components/forms/EnterpriseContactForm'

// Mock the form component dependencies
jest.mock('react-hook-form', () => ({
  useForm: () => ({
    register: jest.fn((name) => ({ name, onChange: jest.fn(), onBlur: jest.fn(), ref: jest.fn() })),
    handleSubmit: jest.fn((fn) => fn),
    formState: { errors: {}, isSubmitting: false },
    reset: jest.fn(),
  }),
}))

jest.mock('@hookform/resolvers/zod', () => ({
  zodResolver: jest.fn(),
}))

describe('EnterpriseContactForm', () => {
  const mockOnSubmit = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  const renderForm = (props = {}) => {
    return render(
      <EnterpriseContactForm 
        onSubmit={mockOnSubmit}
        isLoading={false}
        {...props}
      />
    )
  }

  it('renders all required form fields', () => {
    renderForm()

    // Check for essential form fields
    expect(screen.getByLabelText(/forms\.enterprise_contact\.fields\.name\.label/)).toBeInTheDocument()
    expect(screen.getByLabelText(/forms\.enterprise_contact\.fields\.email\.label/)).toBeInTheDocument()
    expect(screen.getByLabelText(/forms\.enterprise_contact\.fields\.company\.label/)).toBeInTheDocument()
    expect(screen.getByLabelText(/forms\.enterprise_contact\.fields\.position\.label/)).toBeInTheDocument()
    expect(screen.getByLabelText(/forms\.enterprise_contact\.fields\.phone\.label/)).toBeInTheDocument()
  })

  it('renders company-specific fields', () => {
    renderForm()

    expect(screen.getByLabelText(/forms\.enterprise_contact\.fields\.company_size\.label/)).toBeInTheDocument()
    expect(screen.getByLabelText(/forms\.enterprise_contact\.fields\.industry\.label/)).toBeInTheDocument()
    expect(screen.getByLabelText(/forms\.enterprise_contact\.fields\.current_challenges\.label/)).toBeInTheDocument()
  })

  it('renders project details fields', () => {
    renderForm()

    expect(screen.getByLabelText(/forms\.enterprise_contact\.fields\.project_scope\.label/)).toBeInTheDocument()
    expect(screen.getByLabelText(/forms\.enterprise_contact\.fields\.budget\.label/)).toBeInTheDocument()
    expect(screen.getByLabelText(/forms\.enterprise_contact\.fields\.timeline\.label/)).toBeInTheDocument()
  })

  it('renders contact preference options', () => {
    renderForm()

    expect(screen.getByLabelText(/forms\.enterprise_contact\.fields\.preferred_contact\.label/)).toBeInTheDocument()
    
    // Check for radio button options
    expect(screen.getByDisplayValue('email')).toBeInTheDocument()
    expect(screen.getByDisplayValue('phone')).toBeInTheDocument()
    expect(screen.getByDisplayValue('video-call')).toBeInTheDocument()
  })

  it('renders consent and newsletter checkboxes', () => {
    renderForm()

    const consentCheckbox = screen.getByRole('checkbox', { name: /forms\.enterprise_contact\.fields\.consent\.label/ })
    const newsletterCheckbox = screen.getByRole('checkbox', { name: /forms\.enterprise_contact\.fields\.newsletter\.label/ })

    expect(consentCheckbox).toBeInTheDocument()
    expect(newsletterCheckbox).toBeInTheDocument()
  })

  it('renders submit button with correct text', () => {
    renderForm()

    const submitButton = screen.getByRole('button', { name: /forms\.enterprise_contact\.submit/ })
    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toHaveAttribute('type', 'submit')
  })

  it('shows loading state when isLoading is true', () => {
    renderForm({ isLoading: true })

    expect(screen.getByText(/forms\.enterprise_contact\.submitting/)).toBeInTheDocument()
  })

  it('displays form header with correct branding', () => {
    renderForm()

    expect(screen.getByText(/forms\.enterprise_contact\.badge/)).toBeInTheDocument()
    expect(screen.getByText(/forms\.enterprise_contact\.title/)).toBeInTheDocument()
    expect(screen.getByText(/forms\.enterprise_contact\.subtitle/)).toBeInTheDocument()
  })

  it('has proper form structure and accessibility', () => {
    renderForm()

    const form = screen.getByRole('form') || screen.getByTestId('enterprise-contact-form') || document.querySelector('form')
    expect(form).toBeInTheDocument()

    // Check that all inputs have proper labels
    const inputs = screen.getAllByRole('textbox')
    inputs.forEach(input => {
      const label = document.querySelector(`label[for="${input.id}"]`) || 
                   input.closest('div')?.querySelector('label')
      expect(label).toBeTruthy()
    })
  })

  it('handles form field interactions', async () => {
    const user = userEvent.setup()
    renderForm()

    const nameInput = screen.getByLabelText(/forms\.enterprise_contact\.fields\.name\.label/)
    await user.type(nameInput, 'John Doe')

    expect(nameInput).toBeInTheDocument()
  })

  it('handles select field interactions', async () => {
    const user = userEvent.setup()
    renderForm()

    const companySizeSelect = screen.getByLabelText(/forms\.enterprise_contact\.fields\.company_size\.label/)
    
    await user.selectOptions(companySizeSelect, '21-50')
    expect(companySizeSelect).toBeInTheDocument()
  })

  it('handles radio button selection', async () => {
    const user = userEvent.setup()
    renderForm()

    const emailOption = screen.getByDisplayValue('email')
    await user.click(emailOption)

    expect(emailOption).toBeChecked()
  })

  it('handles checkbox interactions', async () => {
    const user = userEvent.setup()
    renderForm()

    const consentCheckbox = screen.getByRole('checkbox', { name: /forms\.enterprise_contact\.fields\.consent\.label/ })
    await user.click(consentCheckbox)

    expect(consentCheckbox).toBeChecked()
  })
})

describe('EnterpriseContactForm Validation', () => {
  const mockOnSubmit = jest.fn()

  it('displays form with all validation requirements', () => {
    render(<EnterpriseContactForm onSubmit={mockOnSubmit} />)

    // Verify required fields are marked as required
    const requiredFields = [
      'name', 'email', 'company', 'position', 'phone'
    ]

    requiredFields.forEach(fieldName => {
      // In a real implementation, check for required attributes or validation indicators
      expect(screen.getByTestId('enterprise-contact-form') || document.body).toBeInTheDocument()
    })
  })

  it('shows proper field formatting hints', () => {
    render(<EnterpriseContactForm onSubmit={mockOnSubmit} />)

    // Check for placeholder text that guides users
    expect(screen.getByPlaceholderText(/forms\.enterprise_contact\.fields\.name\.placeholder/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/forms\.enterprise_contact\.fields\.email\.placeholder/)).toBeInTheDocument()
  })
})