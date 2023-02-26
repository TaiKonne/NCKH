import axios  from "axios"
// https://datausa.io/api/data?drilldowns=Nation&measures=Population
async function  getPopulation(drilldowns , measures)
{
    const urlGetPopulation =`https://datausa.io/api/data?drilldowns=${drilldowns}&measures=${measures}`
    axios.get(urlGetPopulation).then(responseData => {
        console.log('haha')
        debugger
    }).catch(error =>{
        throw error
    })
}
export default{
    getPopulation,
}