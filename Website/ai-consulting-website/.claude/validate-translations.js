#!/usr/bin/env node

/**
 * Translation Validation Script
 * Ensures all translation keys exist in both fr.json and en.json
 */

const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, '..', 'src', 'messages');
const frPath = path.join(messagesDir, 'fr.json');
const enPath = path.join(messagesDir, 'en.json');

function loadJSON(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error.message);
    process.exit(1);
  }
}

function flattenKeys(obj, prefix = '') {
  const keys = [];
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys.push(...flattenKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  
  return keys;
}

function validateTranslations() {
  console.log('🌐 Validating translations...\n');
  
  const frTranslations = loadJSON(frPath);
  const enTranslations = loadJSON(enPath);
  
  const frKeys = new Set(flattenKeys(frTranslations));
  const enKeys = new Set(flattenKeys(enTranslations));
  
  const missingInEn = [...frKeys].filter(key => !enKeys.has(key));
  const missingInFr = [...enKeys].filter(key => !frKeys.has(key));
  
  let hasErrors = false;
  
  if (missingInEn.length > 0) {
    console.error('❌ Missing in en.json:');
    missingInEn.forEach(key => console.error(`   - ${key}`));
    console.error('');
    hasErrors = true;
  }
  
  if (missingInFr.length > 0) {
    console.error('❌ Missing in fr.json:');
    missingInFr.forEach(key => console.error(`   - ${key}`));
    console.error('');
    hasErrors = true;
  }
  
  if (!hasErrors) {
    console.log('✅ All translation keys are present in both locales!');
    console.log(`📊 Total keys: ${frKeys.size}`);
  } else {
    console.error('🚨 Translation validation failed!');
    console.error('Please add missing keys to ensure both French and English support.');
    process.exit(1);
  }
}

// Helper function to generate template for missing keys
function generateTemplate(keys, locale) {
  const template = {};
  
  keys.forEach(key => {
    const parts = key.split('.');
    let current = template;
    
    for (let i = 0; i < parts.length - 1; i++) {
      if (!current[parts[i]]) {
        current[parts[i]] = {};
      }
      current = current[parts[i]];
    }
    
    current[parts[parts.length - 1]] = `TODO: Add ${locale} translation for ${key}`;
  });
  
  return JSON.stringify(template, null, 2);
}

// Add helper for generating missing key templates
function generateTemplates() {
  const frTranslations = loadJSON(frPath);
  const enTranslations = loadJSON(enPath);
  
  const frKeys = new Set(flattenKeys(frTranslations));
  const enKeys = new Set(flattenKeys(enTranslations));
  
  const missingInEn = [...frKeys].filter(key => !enKeys.has(key));
  const missingInFr = [...enKeys].filter(key => !frKeys.has(key));
  
  if (missingInEn.length > 0) {
    console.log('\n📝 Template for missing English translations:');
    console.log(generateTemplate(missingInEn, 'English'));
  }
  
  if (missingInFr.length > 0) {
    console.log('\n📝 Template for missing French translations:');
    console.log(generateTemplate(missingInFr, 'French'));
  }
}

// Run validation
validateTranslations();

// If there are errors, show templates
const frTranslations = loadJSON(frPath);
const enTranslations = loadJSON(enPath);
const frKeys = new Set(flattenKeys(frTranslations));
const enKeys = new Set(flattenKeys(enTranslations));
const missingInEn = [...frKeys].filter(key => !enKeys.has(key));
const missingInFr = [...enKeys].filter(key => !frKeys.has(key));

if (missingInEn.length > 0 || missingInFr.length > 0) {
  generateTemplates();
}