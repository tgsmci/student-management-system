export default [
  {
    title: 'SY 2022-2023 Regular Classes',
    baseId: null,
    fees: {
      // DEFAULT: {},
      'Junior Casa': {
        tuition: 11090.24,
        registration: 1000.00,
        miscallenous: 7965.00,
      },
      'Senior Casa': {
        tuition: 11090.24,
        registration: 1000.00,
        miscallenous: 7965.00,
      },
      'Advanced Casa': {
        tuition: 11090.24,
        registration: 1000.00,
        miscallenous: 7965.00,
      },
      'Grade 1': {
        tuition: 12101.22,
        registration: 1000.00,
        miscallenous: 6965.00,
      },
      'Grade 2': {
        tuition: 12101.22,
        registration: 1000.00,
        miscallenous: 6965.00,
      },
      'Grade 3': {
        tuition: 12101.22,
        registration: 1000.00,
        miscallenous: 6965.00,
      },
      'Grade 4': {
        tuition: 12101.22,
        registration: 1000.00,
        miscallenous: 6965.00,
      },
      'Grade 5': {
        tuition: 12101.22,
        registration: 1000.00,
        miscallenous: 6965.00,
      },
      'Grade 6': {
        tuition: 12101.22,
        registration: 1000.00,
        miscallenous: 6965.00,
      },
      'Grade 7': {
        tuition: 12101.22,
        registration: 1000.00,
        miscallenous: 6965.00,
      },
      'Grade 8': {
        tuition: 12101.22,
        registration: 1000.00,
        miscallenous: 6965.00,
      },
      'Grade 9': {
        tuition: 12101.22,
        registration: 1000.00,
        miscallenous: 6965.00,
      },
      'Grade 10': {
        tuition: 12101.22,
        registration: 1000.00,
        miscallenous: 6965.00,
      },
    },
    discounts: [
      {
        title: '1st Honor Student Discount',
        description: '100% off Tuition Fee',
        handler: ({ tuition }) => ({ tuition: tuition * 0 }),
        // priority
        // permissions
      },
      {
        title: '2nd Honor Student Discount',
        description: '75% off Tuition Fee',
        handler: ({ tuition }) => ({ tuition: tuition * 0.25 }),
      },
      {
        title: 'Employee Discount',
        description: '100% off Tuition Fee',
        handler: ({ tuition }) => ({ tuition: tuition * 0 }),
      },
      {
        title: 'Full-Payment Discount',
        description: 'Tuition Fee - 10%',
        handler: ({ tuition }) => ({ tuition: tuition * 0.90 }),
      },
      {
        title: '1x Sibling Discount',
        description: '25% off Tuition Fee',
        handler: ({ tuition }) => ({ tuition: tuition * 0.75 }),
      },
      {
        title: '2x Siblings Discount',
        description: '50% off Tuition Fee',
        handler: ({ tuition }) => ({ tuition: tuition * 0.5 }),
      },
      {
        title: 'ESC Deduction',
        description: 'Varies',
        handler: ({ subtotal }, value) => ({ subtotal: subtotal - value }),
      },
      {
        title: 'Cash Discount',
        description: 'Varies',
        handler: ({ subtotal }, value) => ({ subtotal: subtotal - value }),
      },
      {
        title: 'Family Discount',
        description: '100% off All Fees',
        handler: ({ subtotal }) => ({ subtotal: 0 }),
      },
    ],
    paymentTypes: [
      'Cash',
      'Check',
      'Salary Deduction',
    ],
  },
]
