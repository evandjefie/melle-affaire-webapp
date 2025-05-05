/*
  # Insert sample data for MELLE Affaire

  This migration adds initial sample data for:
  1. Categories
  2. Products
*/

-- Insert categories
INSERT INTO categories (name_fr, name_en) VALUES
  ('Entrées', 'Appetizers'),
  ('Cocktails', 'Cocktails'),
  ('Crêpes', 'Crepes'),
  ('Desserts', 'Desserts'),
  ('Goûters Enfants', 'Kids Snacks');

-- Insert products
INSERT INTO products (category_id, name_fr, name_en, description_fr, description_en, price, image_url, active) VALUES
  -- Appetizers
  ((SELECT id FROM categories WHERE name_fr = 'Entrées'), 
   'Plateau Royal', 
   'Royal Platter',
   'Une sélection raffinée de canapés premium, incluant saumon fumé, foie gras et caviar.',
   'A refined selection of premium canapés, including smoked salmon, foie gras, and caviar.',
   25000,
   'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg',
   true),

  ((SELECT id FROM categories WHERE name_fr = 'Entrées'),
   'Assortiment de Salades Gourmandes',
   'Gourmet Salad Assortment',
   'Trio de salades composées avec des ingrédients frais et des vinaigrettes maison.',
   'Trio of composed salads with fresh ingredients and homemade dressings.',
   15000,
   'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
   true),

  -- Cocktails
  ((SELECT id FROM categories WHERE name_fr = 'Cocktails'),
   'Collection Signature',
   'Signature Collection',
   'Notre sélection de cocktails signatures, préparés avec des spiritueux premium.',
   'Our selection of signature cocktails, crafted with premium spirits.',
   35000,
   'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg',
   true),

  ((SELECT id FROM categories WHERE name_fr = 'Cocktails'),
   'Mocktails Exotiques',
   'Exotic Mocktails',
   'Cocktails sans alcool aux saveurs exotiques et fruits frais.',
   'Non-alcoholic cocktails with exotic flavors and fresh fruits.',
   20000,
   'https://images.pexels.com/photos/1232152/pexels-photo-1232152.jpeg',
   true),

  -- Crepes
  ((SELECT id FROM categories WHERE name_fr = 'Crêpes'),
   'Crêpes Gourmandes',
   'Gourmet Crepes',
   'Assortiment de crêpes sucrées et salées avec garnitures premium.',
   'Assortment of sweet and savory crepes with premium toppings.',
   18000,
   'https://images.pexels.com/photos/3676531/pexels-photo-3676531.jpeg',
   true),

  -- Desserts
  ((SELECT id FROM categories WHERE name_fr = 'Desserts'),
   'Collection Pâtissière',
   'Pastry Collection',
   'Sélection de nos meilleures pâtisseries françaises artisanales.',
   'Selection of our finest handcrafted French pastries.',
   30000,
   'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg',
   true),

  -- Kids
  ((SELECT id FROM categories WHERE name_fr = 'Goûters Enfants'),
   'Box Anniversaire',
   'Birthday Box',
   'Box festive pour anniversaire incluant mini-sandwichs, gâteaux et surprises.',
   'Festive birthday box including mini sandwiches, cakes, and surprises.',
   22000,
   'https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg',
   true);