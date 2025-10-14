import { render, screen, fireEvent } from '@testing-library/react'
import { PaymentFlexibility } from '../PaymentFlexibility'
import { NextIntlClientProvider } from 'next-intl'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  CreditCard: () => <div data-testid="credit-card-icon" />,
  Calendar: () => <div data-testid="calendar-icon" />,
  Mail: () => <div data-testid="mail-icon" />,
  Phone: () => <div data-testid="phone-icon" />,
  ChevronDown: () => <div data-testid="chevron-down-icon" />,
  ChevronUp: () => <div data-testid="chevron-up-icon" />,
  CheckCircle: () => <div data-testid="check-circle-icon" />,
  Clock: () => <div data-testid="clock-icon" />,
}))

// Mock translation messages
const messages = {
  payment_flexibility: {
    primary_message: 'Pour les paiements en plusieurs fois :',
    contact_link: 'nous contacter',
    benefits: {
      flexible_plans: 'Plans flexibles disponibles',
      quick_response: 'Réponse sous 24h garantie'
    },
    options_title: 'Options d\'échelonnement',
    installment_period: '{months} mois',
    per_month: 'mois',
    calculation_note: 'Montants approximatifs - plan personnalisé sur demande',
    contact_title: 'Comment nous contacter',
    email_contact: 'Envoyer un courriel',
    email_description: 'Réponse garantie sous 24h',
    alternative_contact: 'Ou contactez-nous directement :',
    email_subject: 'Demande de plan de paiement - {formation}',
    email_body: 'Bonjour...',
    process_title: 'Notre processus de réponse',
    process: {
      step1: 'Votre demande',
      step2: 'Notre réponse',
      step3: 'Plan personnalisé',
      step4: 'Inscription confirmée',
      immediate: 'Immédiat',
      within_24h: 'Sous 24h',
      within_48h: 'Sous 48h',
      same_day: 'Même jour'
    },
    formations: {
      kickstart: 'Formation Kickstart',
      architecte: 'Formation Architecte'
    }
  }
}

const renderWithIntl = (component: React.ReactElement) => {
  return render(
    <NextIntlClientProvider locale="fr" messages={messages}>
      {component}
    </NextIntlClientProvider>
  )
}

describe('PaymentFlexibility', () => {
  it('renders primary message correctly', () => {
    renderWithIntl(
      <PaymentFlexibility formationName="kickstart" price={280} />
    )
    
    expect(screen.getByText('Pour les paiements en plusieurs fois :')).toBeInTheDocument()
    expect(screen.getByText('nous contacter')).toBeInTheDocument()
  })

  it('calculates installment amounts correctly for kickstart', () => {
    renderWithIntl(
      <PaymentFlexibility formationName="kickstart" price={280} />
    )
    
    // Click to expand details
    fireEvent.click(screen.getByText('nous contacter'))
    
    // Check installment calculations
    expect(screen.getByText('~94€/mois')).toBeInTheDocument() // 3 months
    expect(screen.getByText('~47€/mois')).toBeInTheDocument() // 6 months
    expect(screen.getByText('~24€/mois')).toBeInTheDocument() // 12 months
  })

  it('calculates installment amounts correctly for architecte', () => {
    renderWithIntl(
      <PaymentFlexibility formationName="architecte" price={700} />
    )

    // Click to expand details
    fireEvent.click(screen.getByText('nous contacter'))

    // Check installment calculations (700€ full price, no discount)
    expect(screen.getByText('~234€/mois')).toBeInTheDocument() // 3 months: 700/3
    expect(screen.getByText('~117€/mois')).toBeInTheDocument() // 6 months: 700/6
    expect(screen.getByText('~59€/mois')).toBeInTheDocument() // 12 months: 700/12
  })

  it('shows and hides details when clicking contact link', () => {
    renderWithIntl(
      <PaymentFlexibility formationName="kickstart" price={280} />
    )
    
    // Details should be hidden initially
    expect(screen.queryByText('Options d\'échelonnement')).not.toBeInTheDocument()
    
    // Click to expand
    fireEvent.click(screen.getByText('nous contacter'))
    expect(screen.getByText('Options d\'échelonnement')).toBeInTheDocument()
    
    // Click to collapse
    fireEvent.click(screen.getByText('nous contacter'))
    expect(screen.queryByText('Options d\'échelonnement')).not.toBeInTheDocument()
  })

  it('generates correct email link with formation-specific subject', () => {
    renderWithIntl(
      <PaymentFlexibility formationName="kickstart" price={280} />
    )
    
    // Click to expand details
    fireEvent.click(screen.getByText('nous contacter'))
    
    // Check email link
    const emailLink = screen.getByText('Envoyer un courriel').closest('a')
    expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:hello@new-code.ca'))
    expect(emailLink).toHaveAttribute('href', expect.stringContaining('Formation%20Kickstart'))
    expect(emailLink).toHaveAttribute('href', expect.stringContaining('280'))
  })

  it('displays process timeline when expanded', () => {
    renderWithIntl(
      <PaymentFlexibility formationName="kickstart" price={280} />
    )
    
    // Click to expand details
    fireEvent.click(screen.getByText('nous contacter'))
    
    // Check process steps
    expect(screen.getByText('Notre processus de réponse')).toBeInTheDocument()
    expect(screen.getByText('Votre demande')).toBeInTheDocument()
    expect(screen.getByText('Notre réponse')).toBeInTheDocument()
    expect(screen.getByText('Plan personnalisé')).toBeInTheDocument()
    expect(screen.getByText('Inscription confirmée')).toBeInTheDocument()
  })

  it('applies custom className when provided', () => {
    const { container } = renderWithIntl(
      <PaymentFlexibility 
        formationName="kickstart" 
        price={280} 
        className="custom-class" 
      />
    )
    
    expect(container.firstChild).toHaveClass('payment-flexibility', 'custom-class')
  })
})