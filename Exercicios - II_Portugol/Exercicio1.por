programa
{
	
	funcao inicio()
	{
		inteiro soma=0,num
		caracter resposta

		faca{
		escreva("Digite um número: ")
		leia(num)

		escreva("\nQuer fornecer outro número? (s/n) ")
		leia(resposta)
		soma+=num
		}enquanto(resposta!='n')

		escreva("A soma dos números é: "+soma)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 280; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */