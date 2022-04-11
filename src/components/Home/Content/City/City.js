import React from 'react';

const City = () => {
    return (
        <div className="city">
            <h2 className="city__name">Заказать суши в Бишкеке</h2>
            <p className="city__subtitle">Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом, приготовленные
                по классическим и адаптированным к европейской аудитории рецептам, а также собственным наработкам наших
                поваров. Мы ценим время наших клиентов, поэтому вы можете заказать суши в Харькове с доставкой на дом или в офис.</p>
            <p className="city__subtitle">В нашем меню болеее 20 видов суши</p>
            <ul>
                <li>Классические с сырным лососем,тунцом,окунем</li>
                <li>Экзотические с тигровой креветкой, морским гребешком</li>
                <li>Пикантный с капченым лососем,угрем.</li>
            </ul>
            <p className="city__subtitle">В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.</p>
        </div>
    );
};

export default City;