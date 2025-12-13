import { createClient } from '@/lib/supabase/client'
import { Customer, CustomerGroup, CustomerAddress, CustomerCommission, CustomerPayment, BusinessRule } from './types'

const supabase = createClient()

export async function getCustomers(): Promise<Customer[]> {
    const { data, error } = await supabase.from('customers').select('*')
    if (error) throw error
    return data as Customer[]
}

export async function getCustomerGroups(): Promise<CustomerGroup[]> {
    const { data, error } = await supabase.from('customer_groups').select('*')
    if (error) throw error
    return data as CustomerGroup[]
}

export async function getCustomerAddresses(): Promise<CustomerAddress[]> {
    const { data, error } = await supabase.from('customer_addresses').select('*')
    if (error) throw error
    return data as CustomerAddress[]
}

export async function getCustomerCommissions(): Promise<CustomerCommission[]> {
    const { data, error } = await supabase.from('customer_commissions').select('*')
    if (error) throw error
    return data as CustomerCommission[]
}

export async function getCustomerPayments(): Promise<CustomerPayment[]> {
    const { data, error } = await supabase.from('customer_payments').select('*')
    if (error) throw error
    return data as CustomerPayment[]
}

export async function getCustomerBusinessRules(): Promise<BusinessRule[]> {
    const { data, error } = await supabase.from('business_rules').select('*')
    if (error) throw error
    return data as BusinessRule[]
}
