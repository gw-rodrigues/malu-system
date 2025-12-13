import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../../query-keys'
import {
    getCustomers,
    getCustomerGroups,
    getCustomerAddresses,
    getCustomerCommissions,
    getCustomerPayments,
    getCustomerBusinessRules
} from './services'

export function useCustomers() {
    return useQuery({
        queryKey: queryKeys.crm.customers.all,
        queryFn: getCustomers,
    })
}

export function useCustomerGroups() {
    return useQuery({
        queryKey: queryKeys.crm.customers.groups.all,
        queryFn: getCustomerGroups,
    })
}

export function useCustomerAddresses() {
    return useQuery({
        queryKey: queryKeys.crm.customers.addresses.all,
        queryFn: getCustomerAddresses,
    })
}

export function useCustomerCommissions() {
    return useQuery({
        queryKey: queryKeys.crm.customers.commissions.all,
        queryFn: getCustomerCommissions,
    })
}

export function useCustomerPayments() {
    return useQuery({
        queryKey: queryKeys.crm.customers.payments.all,
        queryFn: getCustomerPayments,
    })
}

export function useCustomerBusinessRules() {
    return useQuery({
        queryKey: queryKeys.crm.customers.businessRules.all,
        queryFn: getCustomerBusinessRules,
    })
}
