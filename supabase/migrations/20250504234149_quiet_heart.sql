/*
  # Create products and categories tables

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name_fr` (text, French name)
      - `name_en` (text, English name)
      - `created_at` (timestamp)
    
    - `products`
      - `id` (uuid, primary key)
      - `category_id` (uuid, foreign key to categories)
      - `name_fr` (text, French name)
      - `name_en` (text, English name)
      - `description_fr` (text, French description)
      - `description_en` (text, English description)
      - `price` (integer, price in FCFA)
      - `image_url` (text, product image URL)
      - `active` (boolean, product availability)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated admin users to manage products
    - Add policies for public users to view active products
*/

-- Create categories table
CREATE TABLE categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_fr text NOT NULL,
  name_en text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  name_fr text NOT NULL,
  name_en text NOT NULL,
  description_fr text NOT NULL,
  description_en text NOT NULL,
  price integer NOT NULL,
  image_url text NOT NULL,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Policies for categories
CREATE POLICY "Allow public read access to categories"
  ON categories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow admin users to manage categories"
  ON categories
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

-- Policies for products
CREATE POLICY "Allow public read access to active products"
  ON products
  FOR SELECT
  TO public
  USING (active = true);

CREATE POLICY "Allow admin users to manage products"
  ON products
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for updating updated_at
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();