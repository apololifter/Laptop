ingresos_totales = 0
gastos_totales = 0
terminado = False

print("Ingrese los montos indicando si son ingresos (+) o gastos (-). Ingrese 0 para terminar.")
while not terminado:
    monto = float(input("Ingrese el monto: "))
    
    if monto == 0:
        terminado = True
    else:
        if monto > 0:
            print("Ingreso:", monto)
            ingresos_totales += monto
        else:
            print("Gasto:", monto)
            gastos_totales += monto

print("\nTotal de ingresos:", ingresos_totales)
print("Total de gastos:", gastos_totales)

if ingresos_totales >= abs(gastos_totales):
    print("Los ingresos cubren los gastos.")
else:
    print("Los ingresos NO cubren los gastos.")
