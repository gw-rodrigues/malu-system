export type Product = {
  id: string;
  title: string;
  photo_url: string | null;
  collection: string | null;
  sales_channels: number; // Count for now, or list if needed
  variants: number; // Count
  status: 'draft' | 'proposed' | 'published' | 'rejected';
  description: string | null;
  price: number; // We might need to fetch this from variants or money_amount if exists, keeping simple for now
  created_at: string;
  updated_at: string;
};
