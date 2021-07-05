from flask import *
import SalarioNew as calc 


app = Flask(name)

@app.route('/calculo', methods=['POST'])
def calculo():
    content = request.get_json()
    print(request.get_json())
    salario = content['salario']
    NrDependentes = content['dependentes']
    print("salario recebido {} Nr Dependentes {} ".format(salario, NrDependentes))

    SomaDescontoINSS = calc.calcular_inss(salario)
    descontoCalculadoIRRF = calc.calcular_irrf(salario,SomaDescontoINSS,NrDependentes)
    valor_liquido = float(salario) - SomaDescontoINSS - descontoCalculadoIRRF 

    print(valor_liquido)

    return json.dumps({'success':True}), 200, {'ContentType':'application/json'}



