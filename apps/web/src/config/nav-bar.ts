import { NavItem } from '@/types'
import { NavBarItem } from '@/types/nav-bar'
import {
  IconHelpCircle,
  IconLayoutDashboard,
  IconSettings,
  IconUser,
  IconUserEdit,
  IconCurrencyDollar,
  IconDiscount,
  IconUsersGroup,
  IconBuildings,
  IconTruck,
  IconPackage,
  IconChartBar,
  IconCoin,
  IconCreditCardPay,
  IconSettings2,
  IconPercentage,
  IconWallet,
  IconScan,
  IconQrcode,
  IconLock,
  IconList,
  IconReceipt,
  IconBoxMultiple,
  IconShoppingCart,
  IconTags,
  IconBuildingFactory,
} from '@tabler/icons-react'

export const navBarMain: NavBarItem[] = [
  {
    title: 'Operações Comerciais',
    items: [
      {
        title: 'Visão Geral',
        url: '/dashboard/overview',
        icon: IconLayoutDashboard,
        shortcut: ['d', 'd'],
        items: [],
      },

      {
        title: 'Pedidos',
        url: '/dashboard/#orders',
        icon: IconShoppingCart,
        shortcut: ['o', 'o'],
        items: [],
      },

      {
        title: 'Produtos',
        url: '/dashboard/product',
        icon: IconTags,
        shortcut: ['p', 'p'],
        items: [
          {
            title: 'Coleções',
            url: '/dashboard/product/#collections',
            icon: IconUserEdit,
          },
          {
            title: 'Categorias',
            url: '/dashboard/product/#categories',
            icon: IconUserEdit,
          },
          {
            title: 'Variações',
            url: '/dashboard/product/#variants',
            icon: IconUserEdit,
          },
        ],
      },
      {
        title: 'Produção',
        url: '/dashboard/#production',
        icon: IconBuildingFactory,
        shortcut: ['r', 'r'],
        items: [
          {
            title: 'Lotes',
            url: '/dashboard/#production/batches',
            icon: IconUserEdit,
          },
          {
            title: 'Entrada Produção',
            url: '/dashboard/#production/inbound',
            icon: IconUserEdit,
          },
          {
            title: 'Saída Produção',
            url: '/dashboard/#production/outbound',
            icon: IconUserEdit,
          },
        ],
      },
      {
        title: 'Promoções',
        url: '/dashboard/#promotions',
        icon: IconDiscount,
        shortcut: ['m', 'm'],
        items: [
          {
            title: 'Campanhas',
            url: '/dashboard/#campaigns',
            icon: IconUserEdit,
          },
          { title: 'Cupons', url: '/dashboard/#coupons', icon: IconUserEdit },
        ],
      },
      {
        title: 'Entregas',
        url: '/dashboard/#deliveries',
        icon: IconPackage,
        shortcut: ['e', 'e'],
        items: [
          {
            title: 'Pendentes',
            url: '/dashboard/#deliveries/pending',
            icon: IconUserEdit,
          },
          {
            title: 'Concluídas',
            url: '/dashboard/#deliveries/completed',
            icon: IconUserEdit,
          },
          {
            title: 'Devoluções',
            url: '/dashboard/#deliveries/returns',
            icon: IconUserEdit,
          },
        ],
      },
      {
        title: 'Frota',
        url: '/dashboard/#fleet',
        icon: IconTruck,
        shortcut: ['f', 'f'],
        items: [
          {
            title: 'Condutores',
            url: '/dashboard/#fleet/#drivers',
            icon: IconUserEdit,
          },
          {
            title: 'Veículos',
            url: '/dashboard/#fleet/#vehicles',
            icon: IconUserEdit,
          },
          {
            title: 'Rotas',
            url: '/dashboard/#fleet/#routes',
            icon: IconUserEdit,
          },
          {
            title: 'Gastos Viagem',
            url: '/dashboard/#fleet/expenses',
            icon: IconCoin,
          },
        ],
      },
    ],
  },
  {
    title: 'Estoque & Logística',
    items: [
      {
        title: 'Inventário',
        url: '/dashboard/inventory',
        icon: IconBuildings,
        shortcut: ['i', 'i'],
        items: [
          {
            title: 'Reservas',
            url: '/dashboard/inventory/#reservations',
            icon: IconUserEdit,
          },
          {
            title: 'Armazéns',
            url: '/dashboard/inventory/#warehouses',
            icon: IconUserEdit,
          },
          {
            title: 'Movimentos',
            url: '/dashboard/inventory/#movements',
            icon: IconUserEdit,
          },
        ],
      },

      {
        title: 'Produção',
        url: '/dashboard/#production',
        icon: IconBuildingFactory,
        shortcut: ['r', 'r'],
        items: [
          {
            title: 'Lotes',
            url: '/dashboard/#production/batches',
            icon: IconUserEdit,
          },
          {
            title: 'Entrada Produção',
            url: '/dashboard/#production/inbound',
            icon: IconUserEdit,
          },
          {
            title: 'Saída Produção',
            url: '/dashboard/#production/outbound',
            icon: IconUserEdit,
          },
        ],
      },
      {
        title: 'QR Codes',
        url: '/dashboard/#qrcodes',
        icon: IconScan,
        shortcut: ['q', 'r'],
        items: [
          {
            title: 'Produtos',
            url: '/dashboard/#qrcodes/products',
            icon: IconQrcode,
          },
          {
            title: 'Lotes',
            url: '/dashboard/#qrcodes/batches',
            icon: IconQrcode,
          },
          {
            title: 'Entregas',
            url: '/dashboard/#qrcodes/deliveries',
            icon: IconQrcode,
          },
        ],
      },
    ],
  },
  {
    title: 'CRM & Regras',
    items: [
      {
        title: 'Clientes',
        url: '/dashboard/#customers',
        icon: IconUsersGroup,
        shortcut: ['c', 'c'],
        items: [
          {
            title: 'Grupos Clientes',
            url: '/dashboard/#customers/#customers-groups',
            icon: IconUserEdit,
          },
          {
            title: 'Endereços',
            url: '/dashboard/#customers/#customer-addresses',
            icon: IconUserEdit,
          },
          {
            title: 'Comissões',
            url: '/dashboard/#customers/#commissions',
            icon: IconPercentage,
          },
          {
            title: 'Pagamentos',
            url: '/dashboard/#customers/#payments',
            icon: IconCreditCardPay,
          },
          {
            title: 'Regras Comerciais',
            url: '/dashboard/#customers/#business-rules',
            icon: IconSettings2,
          },
        ],
      },
      {
        title: 'Revendedores',
        url: '/dashboard/#resellers',
        icon: IconUser,
        shortcut: ['r', 'v'],
        items: [
          {
            title: 'Cadastro',
            url: '/dashboard/#resellers/list',
            icon: IconUserEdit,
          },
          {
            title: 'Extratos',
            url: '/dashboard/#resellers/statements',
            icon: IconReceipt,
          },
          {
            title: 'Saldo Produtos',
            url: '/dashboard/#resellers/stock',
            icon: IconBoxMultiple,
          },
        ],
      },
    ],
  },
  {
    title: 'Fluxo Financeiro',
    items: [
      {
        title: 'Lista Preço',
        url: '/dashboard/#price-list',
        icon: IconCurrencyDollar,
        shortcut: ['l', 'l'],
        items: [],
      },
      {
        title: 'Relatórios',
        url: '/dashboard/#reports',
        icon: IconChartBar,
        shortcut: ['r', 'p'],
        items: [
          {
            title: 'Vendas',
            url: '/dashboard/#reports/sales',
            icon: IconUserEdit,
          },
          {
            title: 'Inventário',
            url: '/dashboard/#reports/inventory',
            icon: IconUserEdit,
          },
          {
            title: 'Produção',
            url: '/dashboard/#reports/production',
            icon: IconUserEdit,
          },
          {
            title: 'Entregas',
            url: '/dashboard/#reports/deliveries',
            icon: IconUserEdit,
          },
        ],
      },
      {
        title: 'Financeiro',
        url: '/dashboard/#finance',
        icon: IconWallet,
        shortcut: ['f', 'n'],
        items: [
          {
            title: 'Contas a Receber',
            url: '/dashboard/#finance/receivables',
            icon: IconCoin,
          },
          {
            title: 'Contas a Pagar',
            url: '/dashboard/#finance/payables',
            icon: IconCoin,
          },
          {
            title: 'Repasses Revendedores',
            url: '/dashboard/#finance/reseller-payouts',
            icon: IconCoin,
          },
          {
            title: 'Caixa Viagens',
            url: '/dashboard/#finance/fleet-cash',
            icon: IconWallet,
          },
        ],
      },
    ],
  },
]

export const navBarSecondary: NavBarItem = {
  title: 'Configurações & Suporte',
  items: [
    {
      title: 'Configurações',
      url: '/dashboard/#settings',
      icon: IconSettings,
      shortcut: ['s', 's'],
      isActive: false,
      items: [
        {
          title: 'Usuários',
          url: '/dashboard/#settings/users',
          icon: IconUserEdit,
        },
        {
          title: 'Papéis',
          url: '/dashboard/#settings/roles',
          icon: IconUserEdit,
        },
        {
          title: 'Permissões',
          url: '/dashboard/#settings/permissions',
          icon: IconLock,
        },
        {
          title: 'Preferências',
          url: '/dashboard/#settings/preferences',
          icon: IconUserEdit,
        },
        {
          title: 'Integrações',
          url: '/dashboard/#settings/integrations',
          icon: IconUserEdit,
        },
        {
          title: 'Auditoria',
          url: '/dashboard/#settings/audit',
          icon: IconList,
        },
      ],
    },
    {
      title: 'Ajuda',
      url: '/dashboard/#help',
      icon: IconHelpCircle,
      shortcut: ['h', 'h'],
      isActive: false,
      items: [
        {
          title: 'Documentação',
          url: '/dashboard/#help/docs',
          icon: IconUserEdit,
        },
        {
          title: 'Tutoriais',
          url: '/dashboard/#help/tutorials',
          icon: IconUserEdit,
        },
        {
          title: 'Contatar Suporte',
          url: '/dashboard/#help/support',
          icon: IconUserEdit,
        },
        {
          title: 'Logs do Sistema',
          url: '/dashboard/#help/logs',
          icon: IconUserEdit,
        },
      ],
    },
  ],
}
