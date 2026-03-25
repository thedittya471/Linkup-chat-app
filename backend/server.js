import app from './src/app.js';
import dotenv from 'dotenv';
import connectDB from './src/common/config/db.js';


dotenv.config({
    path: './.env'
});


const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`);
    });
};

startServer().catch((error) => {
    console.error('Error starting server:', error);
    process.exit(1);
}); 
