export interface Plan {
  text: string
  value: string
  currency: 'TWD' | 'USD'
  maximum: string
}

export interface Service {
  text: string
  value: string
  plans: Plan[]
}

export default [
  {
    text: '1Password Families',
    value: '1password',
    plans: [
      { text: '家庭方案（年）', value: '59.88', currency: 'USD', maximum: '5' },
    ],
  },
  {
    text: 'Microsoft 365 Family',
    value: 'microsoft-365',
    plans: [
      { text: '家庭方案（年）', value: '3190', currency: 'TWD', maximum: '6' },
      { text: '家庭方案（月）', value: '320', currency: 'TWD', maximum: '6' },
    ],
  },
  {
    text: 'Netflix',
    value: 'netflix',
    plans: [
      { text: '高級', value: '390', currency: 'TWD', maximum: '4' },
      { text: '標準', value: '330', currency: 'TWD', maximum: '2' },
      { text: '基本', value: '270', currency: 'TWD', maximum: '1' },
    ],
  },
  {
    text: 'Spotify Premium Family',
    value: 'spotify',
    plans: [{ text: '家庭方案', value: '240', currency: 'TWD', maximum: '6' }],
  },
  {
    text: 'YouTube Premium',
    value: 'youtube',
    plans: [{ text: '家庭方案', value: '270', currency: 'TWD', maximum: '6' }],
  },
] as Service[]
