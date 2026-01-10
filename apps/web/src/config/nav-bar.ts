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
    title: 'Painel Controle',
    items: [
      {
        title: 'Visão Geral',
        url: '/overview',
        icon: IconLayoutDashboard,
        shortcut: ['d', 'd'],
        items: [],
      },
    ],
  },
  {
    title: 'Operações Comerciais',
    items: [
      // {
      //   title: 'Pedidos',
      //   url: '/orders',
      //   icon: IconShoppingCart,
      //   shortcut: ['o', 'o'],
      //   items: [],
      // },
      {
        title: 'Produtos',
        url: '/products',
        icon: IconTags,
        shortcut: ['p', 'p'],
        // items: [
        //   {
        //     title: 'Coleções',
        //     url: '/products/collections',
        //     icon: IconUserEdit,
        //   },
        //   {
        //     title: 'Categorias',
        //     url: '/products/categories',
        //     icon: IconUserEdit,
        //   },
        //   {
        //     title: 'Variações',
        //     url: '/product/variants',
        //     icon: IconUserEdit,
        //   },
        // ],
      },
      // {
      //   title: 'Promoções',
      //   url: '/promotions',
      //   icon: IconDiscount,
      //   shortcut: ['m', 'm'],
      //   items: [
      //     {
      //       title: 'Campanhas',
      //       url: '/campaigns',
      //       icon: IconUserEdit,
      //     },
      //     { title: 'Cupons', url: '/coupons', icon: IconUserEdit },
      //   ],
      // },
      // {
      //   title: 'Entregas',
      //   url: '/deliveries',
      //   icon: IconPackage,
      //   shortcut: ['e', 'e'],
      //   items: [
      //     {
      //       title: 'Pendentes',
      //       url: '/deliveries/pending',
      //       icon: IconUserEdit,
      //     },
      //     {
      //       title: 'Concluídas',
      //       url: '/deliveries/completed',
      //       icon: IconUserEdit,
      //     },
      //     {
      //       title: 'Devoluções',
      //       url: '/deliveries/returns',
      //       icon: IconUserEdit,
      //     },
      //   ],
      // },
      {
        title: 'Frota',
        url: '/fleet',
        icon: IconTruck,
        shortcut: ['f', 'f'],
        items: [
          {
            title: 'Condutores',
            url: '/fleet/drivers',
            icon: IconUserEdit,
          },
          {
            title: 'Veículos',
            url: '/fleet/vehicles',
            icon: IconUserEdit,
          },
          // {
          //   title: 'Rotas',
          //   url: '/fleet/routes',
          //   icon: IconUserEdit,
          // },
          {
            title: 'Gastos Viagem',
            url: '/fleet/expenses',
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
        url: '/inventory',
        icon: IconBuildings,
        shortcut: ['i', 'i'],
        items: [
          // {
          //   title: 'Reservas',
          //   url: '/inventory/reservations',
          //   icon: IconUserEdit,
          // },
          // {
          //   title: 'Armazéns',
          //   url: '/inventory/warehouses',
          //   icon: IconUserEdit,
          // },
          {
            title: 'Movimentos',
            url: '/inventory/movements',
            icon: IconUserEdit,
          },
        ],
      },

      {
        title: 'Produção',
        url: '/production',
        icon: IconBuildingFactory,
        shortcut: ['r', 'r'],
        items: [
          // {
          //   title: 'Lotes',
          //   url: '/production/batches',
          //   icon: IconUserEdit,
          // },
          // {
          //   title: 'Entrada Produção',
          //   url: '/production/inbound',
          //   icon: IconUserEdit,
          // },
          {
            title: 'Saída Produção',
            url: '/production/outbound',
            icon: IconUserEdit,
          },
        ],
      },
      // {
      //   title: 'QR Codes',
      //   url: '/qrcodes',
      //   icon: IconScan,
      //   shortcut: ['q', 'r'],
      //   items: [
      //     {
      //       title: 'Produtos',
      //       url: '/qrcodes/products',
      //       icon: IconQrcode,
      //     },
      //     {
      //       title: 'Lotes',
      //       url: '/qrcodes/batches',
      //       icon: IconQrcode,
      //     },
      //     {
      //       title: 'Entregas',
      //       url: '/qrcodes/deliveries',
      //       icon: IconQrcode,
      //     },
      //   ],
      // },
    ],
  },
  {
    title: 'CRM & Regras',
    items: [
      // {
      //   title: 'Clientes',
      //   url: '/customers',
      //   icon: IconUsersGroup,
      //   shortcut: ['c', 'c'],
      //   items: [
      //     {
      //       title: 'Grupos Clientes',
      //       url: '/customers/customers-groups',
      //       icon: IconUserEdit,
      //     },
      //     {
      //       title: 'Endereços',
      //       url: '/customers/customer-addresses',
      //       icon: IconUserEdit,
      //     },
      //     {
      //       title: 'Comissões',
      //       url: '/customers/commissions',
      //       icon: IconPercentage,
      //     },
      //     {
      //       title: 'Pagamentos',
      //       url: '/customers/payments',
      //       icon: IconCreditCardPay,
      //     },
      //     {
      //       title: 'Regras Comerciais',
      //       url: '/customers/business-rules',
      //       icon: IconSettings2,
      //     },
      //   ],
      // },
      {
        title: 'Revendedores',
        url: '/resellers',
        icon: IconUser,
        shortcut: ['r', 'v'],
        items: [
          {
            title: 'Cadastro',
            url: '/resellers/list',
            icon: IconUserEdit,
          },
          {
            title: 'Extratos',
            url: '/resellers/statements',
            icon: IconReceipt,
          },
          {
            title: 'Saldo Produtos',
            url: '/resellers/stock',
            icon: IconBoxMultiple,
          },
          {
            title: 'Comissões',
            url: '/resellers/commissions',
            icon: IconPercentage,
          },
        ],
      },
    ],
  },
  {
    title: 'Fluxo Financeiro',
    items: [
      // {
      //   title: 'Lista Preço',
      //   url: '/price-list',
      //   icon: IconCurrencyDollar,
      //   shortcut: ['l', 'l'],
      //   items: [],
      // },
      {
        title: 'Relatórios',
        url: '/reports',
        icon: IconChartBar,
        shortcut: ['r', 'p'],
        items: [
          // {
          //   title: 'Vendas',
          //   url: '/reports/sales',
          //   icon: IconUserEdit,
          // },
          // {
          //   title: 'Inventário',
          //   url: '/reports/inventory',
          //   icon: IconUserEdit,
          // },
          {
            title: 'Produção',
            url: '/reports/production',
            icon: IconUserEdit,
          },
          {
            title: 'Entregas',
            url: '/reports/deliveries',
            icon: IconUserEdit,
          },
        ],
      },
      // {
      //   title: 'Financeiro',
      //   url: '/finance',
      //   icon: IconWallet,
      //   shortcut: ['f', 'n'],
      //   items: [
      //     {
      //       title: 'Contas a Receber',
      //       url: '/finance/receivables',
      //       icon: IconCoin,
      //     },
      //     {
      //       title: 'Contas a Pagar',
      //       url: '/finance/payables',
      //       icon: IconCoin,
      //     },
      //     {
      //       title: 'Repasses Revendedores',
      //       url: '/finance/reseller-payouts',
      //       icon: IconCoin,
      //     },
      //     {
      //       title: 'Caixa Viagens',
      //       url: '/finance/fleet-cash',
      //       icon: IconWallet,
      //     },
      //   ],
      // },
    ],
  },
]

export const navBarSecondary: NavBarItem[] = [
  {
    title: 'Configurações & Suporte',
    items: [
      {
        title: 'Configurações',
        url: '/settings',
        icon: IconSettings,
        shortcut: ['s', 's'],
        isActive: false,
        items: [
          {
            title: 'Usuários',
            url: '/settings/users',
            icon: IconUserEdit,
          },
          // {
          //   title: 'Papéis',
          //   url: '/settings/roles',
          //   icon: IconUserEdit,
          // },
          // {
          //   title: 'Permissões',
          //   url: '/settings/permissions',
          //   icon: IconLock,
          // },
          // {
          //   title: 'Preferências',
          //   url: '/settings/preferences',
          //   icon: IconUserEdit,
          // },
          // {
          //   title: 'Integrações',
          //   url: '/settings/integrations',
          //   icon: IconUserEdit,
          // },
          // {
          //   title: 'Auditoria',
          //   url: '/settings/audit',
          //   icon: IconList,
          // },
        ],
      },
      {
        title: 'Ajuda',
        url: '/help',
        icon: IconHelpCircle,
        shortcut: ['h', 'h'],
        isActive: false,
        // items: [
        //   {
        //     title: 'Documentação',
        //     url: '/help/docs',
        //     icon: IconUserEdit,
        //   },
        //   {
        //     title: 'Tutoriais',
        //     url: '/help/tutorials',
        //     icon: IconUserEdit,
        //   },
        //   {
        //     title: 'Contatar Suporte',
        //     url: '/help/support',
        //     icon: IconUserEdit,
        //   },
        //   {
        //     title: 'Logs do Sistema',
        //     url: '/help/logs',
        //     icon: IconUserEdit,
        //   },
        // ],
      },
    ]
  }
]
