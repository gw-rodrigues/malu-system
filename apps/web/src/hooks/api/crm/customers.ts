import { createClient } from '@/lib/supabase/client'
import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../query-keys'

// --- Customers ---
export function useCustomers() {
    return useQuery({
        queryKey: queryKeys.crm.customers.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('customers').select('*')
            if (error) throw error
            return data
        }
    })
}

// --- Customer Sub-resources ---
export function useCustomerGroups() {
    return useQuery({
        queryKey: queryKeys.crm.customers.groups.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('customer_groups').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useCustomerAddresses() {
    return useQuery({
        queryKey: queryKeys.crm.customers.addresses.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('customer_addresses').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useCustomerCommissions() {
    return useQuery({
        queryKey: queryKeys.crm.customers.commissions.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('customer_commissions').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useCustomerPayments() {
    return useQuery({
        queryKey: queryKeys.crm.customers.payments.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('customer_payments').select('*')
            if (error) throw error
            return data
        }
    })
}

export function useCustomerBusinessRules() {
    return useQuery({
        queryKey: queryKeys.crm.customers.businessRules.all,
        queryFn: async () => {
            const supabase = createClient()
            const { data, error } = await supabase.from('business_rules').select('*')
            if (error) throw error
            return data
        }
    })
}
