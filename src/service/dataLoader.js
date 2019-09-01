import data from './sampleData.json';

export const DataLoader = () => {
    return {
        getProducts: () => {
            return Promise.resolve(data);
        }
    };
};