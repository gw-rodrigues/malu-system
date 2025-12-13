'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { InventoryItem } from '@/types/data-inventory';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import { CellAction } from './cell-action';

export const columns: ColumnDef<InventoryItem>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label='Select all'
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label='Select row'
            />
        ),
        enableSorting: false,
        enableHiding: false
    },
    {
        accessorKey: 'title',
        header: 'PRODUCT',
        cell: ({ row }) => {
            return (
                <div className="flex items-center gap-4">
                    <div className='relative aspect-square h-12 w-12'>
                        {row.original.photo_url ? (
                            <Image
                                src={row.original.photo_url}
                                alt={row.original.title || 'Product image'}
                                fill
                                className='rounded-lg object-cover'
                            />
                        ) : (
                            <div className="h-full w-full bg-muted rounded-lg flex items-center justify-center text-xs text-muted-foreground">
                                No Img
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <span className="font-medium">{row.original.title || 'Untitled'}</span>
                    </div>
                </div>
            );
        }
    },
    {
        accessorKey: 'sku',
        header: 'SKU',
        cell: ({ row }) => <div>{row.getValue('sku') || '-'}</div>
    },
    {
        accessorKey: 'reserved',
        header: 'RESERVED',
        cell: ({ row }) => <div>{row.getValue('reserved')}</div>
    },
    {
        accessorKey: 'in_stock',
        header: 'IN STOCK',
        cell: ({ row }) => <div>{row.getValue('in_stock')}</div>
    },
    {
        id: 'actions',
        cell: ({ row }) => <CellAction data={row.original} />
    }
];
