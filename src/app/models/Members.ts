export interface Members {
    id: number;
    name: string;
    userName: string;
    email: string;
    address?: Address;
    phone: string;
    website: string;
    company?: Company;
}

interface Address {
    street: string;
    suite: string;
    city: string;
}

interface Company {
    name: string;
}