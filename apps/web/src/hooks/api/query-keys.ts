import { ProductFilters } from "./commercial/products/services";

export const queryKeys = {
    commercial: {
        products: {
            all: ['products'] as const,
            lists: () => [...queryKeys.commercial.products.all, 'list'] as const,
            list: (filters: ProductFilters) => [...queryKeys.commercial.products.lists(), { filters }] as const,
            details: () => [...queryKeys.commercial.products.all, 'detail'] as const,
            detail: (id: string) => [...queryKeys.commercial.products.details(), id] as const,
        },
        collections: {
            all: ['collections'] as const,
            lists: () => [...queryKeys.commercial.collections.all, 'list'] as const,
            list: (filters: string) => [...queryKeys.commercial.collections.lists(), { filters }] as const,
            details: () => [...queryKeys.commercial.collections.all, 'detail'] as const,
            detail: (id: string) => [...queryKeys.commercial.collections.details(), id] as const,
        },
        categories: {
            all: ['categories'] as const,
            lists: () => [...queryKeys.commercial.categories.all, 'list'] as const,
            list: (filters: string) => [...queryKeys.commercial.categories.lists(), { filters }] as const,
            details: () => [...queryKeys.commercial.categories.all, 'detail'] as const,
            detail: (id: string) => [...queryKeys.commercial.categories.details(), id] as const,
        },
        variants: {
            all: ['variants'] as const,
            lists: () => [...queryKeys.commercial.variants.all, 'list'] as const,
            list: (filters: string) => [...queryKeys.commercial.variants.lists(), { filters }] as const,
            details: () => [...queryKeys.commercial.variants.all, 'detail'] as const,
            detail: (id: string) => [...queryKeys.commercial.variants.details(), id] as const,
        },
        orders: {
            all: ['orders'] as const,
            lists: () => [...queryKeys.commercial.orders.all, 'list'] as const,
            list: (filters: string) => [...queryKeys.commercial.orders.lists(), { filters }] as const,
            details: () => [...queryKeys.commercial.orders.all, 'detail'] as const,
            detail: (id: string) => [...queryKeys.commercial.orders.details(), id] as const,
        },
        promotions: {
            campaigns: {
                all: ['campaigns'] as const,
                lists: () => [...queryKeys.commercial.promotions.campaigns.all, 'list'] as const,
                list: (filters: string) => [...queryKeys.commercial.promotions.campaigns.lists(), { filters }] as const,
                details: () => [...queryKeys.commercial.promotions.campaigns.all, 'detail'] as const,
                detail: (id: string) => [...queryKeys.commercial.promotions.campaigns.details(), id] as const,
            },
            coupons: {
                all: ['coupons'] as const,
                lists: () => [...queryKeys.commercial.promotions.coupons.all, 'list'] as const,
                list: (filters: string) => [...queryKeys.commercial.promotions.coupons.lists(), { filters }] as const,
                details: () => [...queryKeys.commercial.promotions.coupons.all, 'detail'] as const,
                detail: (id: string) => [...queryKeys.commercial.promotions.coupons.details(), id] as const,
            },
        },
        deliveries: {
            all: ['deliveries'] as const,
            lists: () => [...queryKeys.commercial.deliveries.all, 'list'] as const,
            list: (filters: string) => [...queryKeys.commercial.deliveries.lists(), { filters }] as const,
            details: () => [...queryKeys.commercial.deliveries.all, 'detail'] as const,
            detail: (id: string) => [...queryKeys.commercial.deliveries.details(), id] as const,
        },
        fleet: {
            drivers: {
                all: ['drivers'] as const,
                lists: () => [...queryKeys.commercial.fleet.drivers.all, 'list'] as const,
                list: (filters: string) => [...queryKeys.commercial.fleet.drivers.lists(), { filters }] as const,
                details: () => [...queryKeys.commercial.fleet.drivers.all, 'detail'] as const,
                detail: (id: string) => [...queryKeys.commercial.fleet.drivers.details(), id] as const,
            },
            vehicles: {
                all: ['vehicles'] as const,
                lists: () => [...queryKeys.commercial.fleet.vehicles.all, 'list'] as const,
                list: (filters: string) => [...queryKeys.commercial.fleet.vehicles.lists(), { filters }] as const,
                details: () => [...queryKeys.commercial.fleet.vehicles.all, 'detail'] as const,
                detail: (id: string) => [...queryKeys.commercial.fleet.vehicles.details(), id] as const,
            },
            routes: {
                all: ['routes'] as const,
                lists: () => [...queryKeys.commercial.fleet.routes.all, 'list'] as const,
                list: (filters: string) => [...queryKeys.commercial.fleet.routes.lists(), { filters }] as const,
                details: () => [...queryKeys.commercial.fleet.routes.all, 'detail'] as const,
                detail: (id: string) => [...queryKeys.commercial.fleet.routes.details(), id] as const,
            },
            expenses: {
                all: ['expenses'] as const,
                lists: () => [...queryKeys.commercial.fleet.expenses.all, 'list'] as const,
                list: (filters: string) => [...queryKeys.commercial.fleet.expenses.lists(), { filters }] as const,
                details: () => [...queryKeys.commercial.fleet.expenses.all, 'detail'] as const,
                detail: (id: string) => [...queryKeys.commercial.fleet.expenses.details(), id] as const,
            },
        },
    },
    logistics: {
        inventory: {
            all: ['inventory'] as const, // For general inventory items
            reservations: {
                all: ['inventory-reservations'] as const,
                lists: () => [...queryKeys.logistics.inventory.reservations.all, 'list'] as const,
                list: (filters: string) => [...queryKeys.logistics.inventory.reservations.lists(), { filters }] as const,
            },
            warehouses: {
                all: ['warehouses'] as const,
                lists: () => [...queryKeys.logistics.inventory.warehouses.all, 'list'] as const,
            },
            movements: {
                all: ['stock-movements'] as const,
                lists: () => [...queryKeys.logistics.inventory.movements.all, 'list'] as const,
            },
        },
        production: {
            batches: { all: ['production-batches'] as const },
            inbound: { all: ['production-inbound'] as const },
            outbound: { all: ['production-outbound'] as const },
        },
        qrcodes: {
            products: { all: ['qrcodes-products'] as const },
            batches: { all: ['qrcodes-batches'] as const },
            deliveries: { all: ['qrcodes-deliveries'] as const },
        },
    },
    crm: {
        customers: {
            all: ['customers'] as const,
            groups: { all: ['customer-groups'] as const },
            addresses: { all: ['customer-addresses'] as const },
            commissions: { all: ['customer-commissions'] as const },
            payments: { all: ['customer-payments'] as const },
            businessRules: { all: ['customer-business-rules'] as const },
        },
        resellers: {
            all: ['resellers'] as const,
            statements: { all: ['reseller-statements'] as const },
            stock: { all: ['reseller-stock'] as const },
        },
    },
    finance: {
        pricelist: { all: ['price-list'] as const },
        receivables: { all: ['finance-receivables'] as const },
        payables: { all: ['finance-payables'] as const },
        resellerPayouts: { all: ['finance-reseller-payouts'] as const },
        fleetCash: { all: ['finance-fleet-cash'] as const },
        reports: {
            sales: { all: ['reports-sales'] as const },
            inventory: { all: ['reports-inventory'] as const },
            production: { all: ['reports-production'] as const },
            deliveries: { all: ['reports-deliveries'] as const },
        },
    },
    settings: {
        users: { all: ['users'] as const },
        roles: { all: ['roles'] as const },
        permissions: { all: ['permissions'] as const },
        preferences: { all: ['preferences'] as const },
        integrations: { all: ['integrations'] as const },
        audit: { all: ['audit-logs'] as const },
        support: {
            docs: { all: ['support-docs'] as const },
            tutorials: { all: ['support-tutorials'] as const },
            logs: { all: ['system-logs'] as const },
        }
    }
}
