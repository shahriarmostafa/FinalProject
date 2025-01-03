import TabItem from "./TabItem";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './TabSection.css';
import useMenue from '../../../Hooks/useMenue';

export default function TabSection() {
    const pizza = useMenue().filter(x => {
        return x.category == 'pizza'
    });
    const dessert = useMenue().filter(x => {
        return x.category == 'dessert'
    });
    const salad = useMenue().filter(x => {
        return x.category == 'salad'
    });
    const soup = useMenue().filter(x => {
        return x.category == 'soup'
    });
    const drinks = useMenue().filter(x => {
        return x.category == 'drinks'
    });
    
    

    return (
        <section className="tab-section">
            <Tabs className="container">
                <TabList>
                    <Tab>SALADS</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>

                <TabPanel className="d-flex justify-content-between flex-wrap">
                    {salad.map(x => {
                        return <TabItem price={x.price} gotto={x.category} recipe={x.recipe} name={x.name} imgSrc={x.image} key={x._id} ></TabItem>
                    })}
                </TabPanel>
                <TabPanel  className="d-flex justify-content-between flex-wrap">
                    {pizza.map(x => {
                        return <TabItem price={x.price} gotto={x.category} recipe={x.recipe} name={x.name} imgSrc={x.image} key={x._id} ></TabItem>
                    })}
                </TabPanel>
                <TabPanel  className="d-flex justify-content-between flex-wrap">
                    {soup.map(x => {
                        return <TabItem price={x.price} gotto={x.category} recipe={x.recipe} name={x.name} imgSrc={x.image} key={x._id} ></TabItem>
                    })}
                </TabPanel>
                <TabPanel  className="d-flex justify-content-between flex-wrap">
                    {dessert.map(x => {
                        return <TabItem price={x.price} gotto={x.category} recipe={x.recipe} name={x.name} imgSrc={x.image} key={x._id} ></TabItem>
                    })}
                </TabPanel>
                <TabPanel  className="d-flex justify-content-between  flex-wrap">
                    {drinks.map(x => {
                        return <TabItem price={x.price} gotto={x.category} recipe={x.recipe} name={x.name} imgSrc={x.image} key={x._id} ></TabItem>
                    })}
                </TabPanel>
            </Tabs>
        </section>
    )
}