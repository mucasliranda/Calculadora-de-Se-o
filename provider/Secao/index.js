import { createContext, useState, useContext } from "react";

const SecaoContext = createContext();

export const SecaoProvider = ({ children }) => {

  const [ secao, setSecao ] = useState(" ")

  const findSecao = (value, type) => {

    if(value === ""){
      return setSecao("")
    }

    else if(type === "corrente"){
      if (value >= 1 & value < 9){
        return setSecao("A seção é: 0.75mm², porém a seção mínima admissível é 1,5 mm²")
      }
      else if (value >= 1 & value < 11){
        return setSecao("A seção é: 1.5mm² para um disjuntor de 16A")
      }
      else if (value >= 1 & value < 14){
        return setSecao("A seção é: 1.5mm² para um disjuntor de 16A")
      }
      else if (value >= 1 & value < 17.5){
        return setSecao("A seção é: 1.5mm² para um disjuntor de 16A")
      }
      else if (value >= 1 & value < 24){
        return setSecao("A seção é: 2.5mm² para um disjuntor de 25A")
      }
      else if (value >= 1 & value < 32){
        return setSecao("A seção é: 4mm² para um disjuntor de 32A")
      }
      else if (value >= 1 & value <= 41){
        return setSecao("A seção é: 10mm² para um disjuntor de 50A")
      }
      else if (value >= 1 & value <= 57){
        return setSecao("A seção é: 16mm² para um disjuntor de 63A")
      }
      else if (value >= 1 & value <= 76){
        return setSecao("A seção é: 25mm² para um disjuntor de 80A")
      }
      else if (value >= 1 & value <= 101){
        return setSecao("A seção é: 35mm² para um disjuntor de 125A")
      }
      else if (value < 1 || value > 101){
        return setSecao("Este valor não é adequado para uma sala de aula!")
      }
    }

    else{
      if (value >= 1 & value < 1143){
        return setSecao("A seção é: 0.75mm², porém a seção mínima admissível é 1,5 mm²")
      }
      else if (value >= 1 & value < 1397){
        return setSecao("A seção é: 1.5mm² para um disjuntor de 16A")
      }
      else if (value >= 1 & value < 1778){
        return setSecao("A seção é: 1.5mm² para um disjuntor de 16A")
      }
      else if (value >= 1 & value < 2222.5){
        return setSecao("A seção é: 2.5mm² para um disjuntor de 20A")
      }
      else if (value >= 1 & value < 3048){
        return setSecao("A seção é: 2.5mm² para um disjuntor de 25A")
      }
      else if (value >= 1 & value < 4064){
        return setSecao("A seção é: 4mm² para um disjuntor de 32A")
      }
      else if (value >= 1 & value <= 5207){
        return setSecao("A seção é: 10mm² para um disjuntor de 50A")
      }
      else if (value >= 1 & value <= 7239){
        return setSecao("A seção é: 16mm² para um disjuntor de 63A")
      }
      else if (value >= 1 & value <= 9652){
        return setSecao("A seção é: 25mm² para um disjuntor de 80A")
      }
      else if (value >= 1 & value <= 12827){
        return setSecao("A seção é: 35mm² para um disjuntor de 125A")
      }
      else if (value <= 1 || value > 12827){
        return setSecao("Este valor não é adequado para uma sala de aula!")
      }
    }

  };

  return (
    <SecaoContext.Provider value={{ findSecao, secao }}>
      {children}
    </SecaoContext.Provider>
  );
};

export const useSecao = () => useContext(SecaoContext);