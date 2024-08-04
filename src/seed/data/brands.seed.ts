import { v4 as uuid } from 'uuid';
import { Brand } from 'src/brands/entities/brand.entity';

export const BRAND_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'brand 1',
    createdAt: new Date().getTime(),
  },
];
