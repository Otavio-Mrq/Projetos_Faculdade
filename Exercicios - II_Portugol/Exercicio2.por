programa
{
	
	funcao inicio()
	{
		inteiro num,ref=0
		cadeia sequencia=""
		
		escreva("Informe um número: ")
		leia(num)

		enquanto(ref<num){
			se(ref%2!=0){
				sequencia+= ref+", "
			}
			ref++
		}
		escreva("Os números ímpares até "+num+" são:\n"+sequencia)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 160; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */