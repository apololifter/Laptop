numeros_romanos = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
romano_a_decimal = input("Ingrese el número romano: ")
transformador = 0
decimal = 0

for letra in romano_a_decimal[::-1]:
    if letra in numeros_romanos:
        numero = numeros_romanos[letra]
        if numero < decimal:
            transformador -= numero
        else:
            transformador += numero
        decimal = numero
    else:
        print(f"Carácter inválido: {letra}")
        break

print(transformador)
