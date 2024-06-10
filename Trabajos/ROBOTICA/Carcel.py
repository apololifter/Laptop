# Solicitar al usuario el valor inicial
valor_inicial = int(input("Ingrese el valor inicial: "))
print("Valor inicial:", valor_inicial)

# Contador de pasos
pasos = 0

# Realizar el cálculo iterativo hasta llegar a 1
while valor_inicial != 1:
    if valor_inicial % 2 == 0:
        valor_inicial = valor_inicial // 2
    else:
        valor_inicial = valor_inicial * 3 + 1
    pasos += 1
    print("Valor siguiente:", valor_inicial)

# Imprimir el valor final y el número de pasos necesarios
print("Valor final: 1 (valor final)")
print("El número de pasos necesarios:", pasos)
