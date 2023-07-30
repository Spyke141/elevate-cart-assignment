
let url = 'https://fakestoreapi.com/products';

const FetchData = async ({setData}) => {
    try{
        const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setData(data);
    } catch (error){
        console.log('Error : ', error);
    }
}

export default FetchData;
