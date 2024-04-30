"use client"
import {useState} from "react";
import EndPoint from "@/app/components/EndPoint";
import RequestComponent from "@/app/components/RequestComponent";
import ChangeTariff from "@/app/components/ChangeTariff";
import SaleTicket from "@/app/components/saleTicket";


export default async function Home() {
    return (
        <main className="w-2/3 flex flex-col mx-auto mt-44">
            <RequestComponent title="1. Показати усі рейси до певного пункту (ввести як параметр)"
                              component={<EndPoint/>}/>
            <RequestComponent title="2. Для певного типу літака збільшити тариф на 10%;"
                              component={<ChangeTariff/>}/>
            <RequestComponent title="Для кожного зареєстрованого продажу авіаквитків показати номер
                                    рейсу, дату продажі, тип салону, вартість квитків у цьому салоні,
                                    кількість квитків, категорію пільг, дату вильоту, підрахувати суму до
                                    сплати (вартість квитка* кількість квитків*пільги +20%ПДВ) ;"
                              component={<SaleTicket/>}/>
        </main>
    )
}
