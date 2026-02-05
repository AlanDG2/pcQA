import { faker } from '@faker-js/faker';

export interface TestData {
  login: {
    email: string;
    password: string;
  };
  account: {
    companyName: string;
    nit: string;
    representativeName: string;
    email: string;
    phone: string;
  };
  admin: {
    fullName: string;
    email: string;
    nit: string;
    phone: string;
  };
  billing: {
    companyName: string;
    businessName: string;
    nit: string;
    email: string;
    phone: string;
    address: string;
    managerName: string;
    position: string;
  };
  config: {
    institutionType: string;
    currency: string;
    timezone: string;
    billingDay: string;
    economicActivity: string;
    taxRegime: string;
    department: string;
    city: string;
    resourceCount: number;
  };
}

export class TestDataHelper {
  static generateTestData(): TestData {
    const companyEmail = `${faker.internet.username()}@yopmail.com`;

    return {
      login: {
        email: 'admin1@yopmail.com',
        password: 'Hola123*'
      },
      account: {
        companyName: faker.company.name(),
        nit: faker.string.numeric(8),
        representativeName: faker.person.fullName(),
        email: companyEmail,
        phone: faker.string.numeric(8)
      },
      admin: {
        fullName: faker.person.fullName(),
        email: companyEmail,
        nit: faker.string.numeric(9),
        phone: faker.string.numeric(8)
      },
      billing: {
        companyName: faker.company.name(),
        businessName: faker.company.buzzNoun(),
        nit: faker.string.numeric(9),
        email: companyEmail,
        phone: faker.string.numeric(8),
        address: faker.location.streetAddress(),
        managerName: faker.person.firstName(),
        position: faker.person.jobTitle().substring(0, 30)
      },
      config: {
        institutionType: 'Cooperativa',
        currency: 'Peso colombiano (COP)',
        timezone: '(UTC-01:00) Azores',
        billingDay: '25',
        economicActivity: 'Agricultura, ganadería, caza',
        taxRegime: 'Responsable Inscripto',
        department: 'Baja Verapaz',
        city: 'Salamá',
        resourceCount: 5
      }
    };
  }
}
