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
        return setSecao("A seção é: 0.5mm², porém a seção mínima admissível é 1,5 mm²")
      }
      else if (value >= 1 & value < 11){
        return setSecao("A seção é: 0.75mm², porém a seção mínima admissível é 1,5 mm²")
      }
      else if (value >= 1 & value < 14){
        return setSecao("A seção é: 1mm², porém a seção mínima admissível é 1,5 mm²")
      }
      else if (value >= 1 & value < 17.5){
        return setSecao("A seção é: 1.5mm². E a corrente nominal do disjuntor é: 10A ")
      }
      else if (value >= 1 & value < 24){
        return setSecao("A seção é: 2.5mm². E a corrente nominal do disjuntor é: 15A")
      }
      else if (value >= 1 & value < 32){
        return setSecao("A seção é: 4mm². E a corrente nominal do disjuntor é: 20A")
      }
      else if (value >= 1 & value <= 41){
        return setSecao("A seção é: 6mm². E a corrente nominal do disjuntor é: 25A")
      }
      else if (value < 1 || value > 41){
        return setSecao("Esse valor não é destinado á residências")
      }
    }

    else{
      if (value >= 1 & value < 1143){
        return setSecao("A seção é: 0.5mm², porém a seção mínima admissível é 1,5 mm²")
      }
      else if (value >= 1 & value < 1397){
        return setSecao("A seção é: 0.75mm², porém a seção mínima admissível é 1,5 mm²")
      }
      else if (value >= 1 & value < 1778){
        return setSecao("A seção é: 1mm², porém a seção mínima admissível é 1,5 mm²")
      }
      else if (value >= 1 & value < 2222.5){
        return setSecao("A seção é: 1.5mm². E a corrente nominal do disjuntor é: 10A ")
      }
      else if (value >= 1 & value < 3048){
        return setSecao("A seção é: 2.5mm². E a corrente nominal do disjuntor é: 15A")
      }
      else if (value >= 1 & value < 4064){
        return setSecao("A seção é: 4mm². E a corrente nominal do disjuntor é: 20A")
      }
      else if (value >= 1 & value <= 5207){
        return setSecao("A seção é: 6mm². E a corrente nominal do disjuntor é: 25A")
      }
      else if (value <= 1 || value > 5207){
        return setSecao("Esse valor não é destinado á residências")
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