# Um jeito simples de mostrar que Node.js não é single thread

## Como usar

`node threads.js <INT>`

Onde <INT> é o número de threads que você quer testar.

## Teste

1) Primeiramente abra o System Monitor
2) Execute a aplicação e veja o uso das CPUs

## Exemplo

Para o exemplo usei dois comandos:

`node threads.js 5`

`node threads.js 1`

No gráfico abaixo é possível ver o uso total das 4 CPUs e logo após o uso de apenas uma.

![](https://i.imgur.com/Al7yKQn.png)

Além disso, olhando pros logs também é possível notar o uso de todas as CPUs. No meu exemplo usando o seguinte comando:

`node threads.js 5`

Gerou o seguinte log:

```
1 -> 1869
3 -> 1879
2 -> 1919
0 -> 1989
4 -> 2844
```

Onde mostra que as 4 primeiras threads `[0, 1, 2, 3]` foram executadas juntas e a 5 `[4]` executada logo após.