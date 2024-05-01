"use client"
import EndPoint from "@/app/components/EndPoint";
import RequestComponent from "@/app/components/RequestComponent";
import ChangeTariff from "@/app/components/ChangeTariff";
import SaleTicket from "@/app/components/saleTicket";
import DateSales from "@/app/components/DateSales";
import Demand from "@/app/components/Demand";
import AvgPrice from "@/app/components/AvgPrice";
import Discount from "@/app/components/Discount";
import PopularDay from "@/app/components/PopularDay";
import CabinSale from "@/app/components/CabinSale";
import AvgCount from "@/app/components/AvgCount";


export default async function Home() {
    return (
        <main className="w-2/3 flex flex-col mx-auto my-44">
            <RequestComponent title="1. Показати усі рейси до певного пункту (ввести як параметр)"
                              component={<EndPoint/>}/>
            <RequestComponent title="2. Для певного типу літака збільшити тариф на 10%;"
                              component={<ChangeTariff/>}/>
            <RequestComponent title="3. Для кожного зареєстрованого продажу авіаквитків показати номер
                                    рейсу, дату продажі, тип салону, вартість квитків у цьому салоні,
                                    кількість квитків, категорію пільг, дату вильоту, підрахувати суму до
                                    сплати (вартість квитка* кількість квитків*пільги +20%ПДВ);"
                              component={<SaleTicket/>}/>
            <RequestComponent
                title="4.	Для одного з рейсів за певною датою підрахувати кількість проданих квитків, їх загальну вартість для кожного типу салону;"
                component={<DateSales/>}/>
            <RequestComponent title="5. Який рейс не користується попитом(квитків на нього продавались
                                     впродовж трьох діб до вильоту)?"
                              component={<Demand/>}/>
            <RequestComponent title="6. Вивести середню ціну квитка для кожного типу кабіни на кожному
                                    рейсі"
                              component={<AvgPrice/>}/>
            <RequestComponent title="7. Показати загальну кількість проданих квитків та суму продажів для
                                        кожної категорії знижок"
                              component={<Discount/>}/>
            <RequestComponent title="8. Знайти найпопулярніший день для вильоту рейсі"
                              component={<PopularDay/>}/>
            <RequestComponent title="9. Отримати загальну кількість проданих квитків для кожного типу
                                        кабіни на кожному рейсі протягом певного періоду"
                              component={<CabinSale/>}/>
            <RequestComponent title="10. Отримати список рейсів, на яких кількість проданих квитків перевищує
                                    середнє значення для всіх рейсів"
                              component={<AvgCount/>}/>
        </main>
    )
}