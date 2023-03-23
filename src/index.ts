import express, { json } from 'express';
import cors from 'cors';
import categoryRouter from './routers/categoryRoutes';
import productRouter from './routers/productRoutes';

const app = express();
app.use(cors());
app.use(json());
app.use(categoryRouter);
app.use(productRouter);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`listen on port: ${port}`));