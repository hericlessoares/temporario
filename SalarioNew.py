import sqlite3


def calcular_inss(salario):
   con = sqlite3.connect('CalculoSalario.db')
   cur = con.cursor()
   calculo = cur.execute("SELECT * FROM INSS WHERE " + salario + " BETWEEN FaixaMinima AND FaixaMaxima ").fetchone()
   descontoInss = float(salario) * calculo[3] - calculo[4]  +   calculo[5]         
   return descontoInss

def calcular_irrf(salario,SomaDescontoINSS,NrDependentes):
   con = sqlite3.connect('CalculoSalario.db')
   cur = con.cursor()
   dependentes = cur.execute("Select dependentes FROM IRRF where ID_IRRF = 1").fetchone()[0]
   descontoDependentes = dependentes * NrDependentes
   salarioBase = float(salario) - SomaDescontoINSS - descontoDependentes
   calculo = cur.execute("SELECT * FROM IRRF WHERE " + str(salarioBase) + " BETWEEN FaixaMin AND FaixaMax ").fetchone()   
   descontoirrf = salarioBase * calculo[3] - calculo[4]
   IRRF = descontoirrf
   return IRRF   


 









