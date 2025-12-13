'use client';
import { Badge } from '@/components/ui/badge';
import { DataTableColumnHeader } from '@/components/ui/table/data-table-column-header';
import { Product } from '@/types/data-product';
import { Column, ColumnDef } from '@tanstack/react-table';
import { CheckCircle2, Text, XCircle } from 'lucide-react';
import Image from 'next/image';
import { CellAction } from './cell-action';
import { CATEGORY_OPTIONS } from './options';

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'photo_url',
    header: 'PRODUCT',
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-4">
          <div className='relative aspect-square h-12 w-12'>
            {row.original.photo_url ? (
              <Image
                src={row.original.photo_url}
                alt={row.original.title}
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
            <span className="font-medium">{row.original.title}</span>
          </div>
        </div>
      );
    }
  },
  {
    accessorKey: 'collection',
    header: 'COLLECTION',
    cell: ({ row }) => <div>{row.getValue('collection') || '-'}</div>
  },
  {
    accessorKey: 'sales_channels',
    header: 'SALES CHANNELS',
    cell: ({ row }) => <div>{row.getValue('sales_channels')}</div>
  },
  {
    accessorKey: 'variants',
    header: 'VARIANTS',
    cell: ({ row }) => <div>{row.getValue('variants')}</div>
  },
  {
    accessorKey: 'status',
    header: 'STATUS',
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <Badge variant={status === 'published' ? 'default' : 'secondary'} className='capitalize'>
          {status}
        </Badge>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
