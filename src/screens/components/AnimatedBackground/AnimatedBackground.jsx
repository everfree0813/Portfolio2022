import React from 'react';

import { ReactComponent as Adobe } from "./svg/adobe.svg";
import { ReactComponent as Coffee } from "./svg/coffee.svg";
import { ReactComponent as Github } from "./svg/github.svg";
import { ReactComponent as Html } from "./svg/html.svg";
import { ReactComponent as Php } from "./svg/php.svg";
import { ReactComponent as Wordpress } from "./svg/wordpress.svg";


 
import "./AnimatedBackground.css";

function AnimatedBackground({ children }) {
    let arr = [];
    let qty = 13;

for (let i =0; i < qty; i++) {
    arr.push(i);
}
//  console.log(arr);

const layers = arr.map (i => {
    return (
        <div key={i} className="animated-row">
            <div>
                <Adobe />
                <Coffee/>
                <Github />
                <Html />
                <Php />
                <Wordpress/>
              

            </div>

            <div>
                <Adobe />
                <Github />
                <Html />
                <Php />
                <Wordpress/>
              

            </div>

        </div>
    );
});
  
    return (
    <section className="animated-section">
        {layers}
        {children}
        </section>);
}

export default AnimatedBackground;