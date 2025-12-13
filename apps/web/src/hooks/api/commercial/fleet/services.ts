import { createClient } from '@/lib/supabase/client'
import { Driver, Vehicle, Route, FleetExpense } from './types'

const supabase = createClient()

export async function getDrivers(): Promise<Driver[]> {
    const { data, error } = await supabase.from('drivers').select('*')
    if (error) throw error
    return data as Driver[]
}

export async function getVehicles(): Promise<Vehicle[]> {
    const { data, error } = await supabase.from('vehicles').select('*')
    if (error) throw error
    return data as Vehicle[]
}

export async function getRoutes(): Promise<Route[]> {
    const { data, error } = await supabase.from('routes').select('*')
    if (error) throw error
    return data as Route[]
}

export async function getFleetExpenses(): Promise<FleetExpense[]> {
    const { data, error } = await supabase.from('fleet_expenses').select('*')
    if (error) throw error
    return data as FleetExpense[]
}
