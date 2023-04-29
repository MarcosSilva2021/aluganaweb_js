<h1>Projeto Integrado: Aplicativo web de Aluguel de utensilios do dia a dia</h1>

<h2>🎯 Objetivo do Projeto</h2>

<p>Este aplicativo está sendo desenvolvido como proposta de projeto para a disciplina de projeto integrado.<br>




<h2>
🛑 Pré-requistos
</h2>

✅ Node.js+Express como plataforma back-end<br>
✅ MySQL como banco de dados<br>
✅ knex.js como biblioteca de acesso ao banco de dados<br>
✅ Git<br>
✅ Conta no GitHub<br>



<ol>
    <li> Apresentação do Projeto  </li>
    <li> Configuração do banco de dados (SGBD <em>PostgreSQL</em>)</li>
 
</ol>

<h2>🛠 Tecnologias Utilizadas</h2>

<ul>
    <li>Visual Studio Code</li>
    <li>Node.js </li>
    
    
</ul>


<h2><a href="https://strn.com.br/artigos/2018/12/11/todas-as-anota%C3%A7%C3%B5es-do-jpa-anota%C3%A7%C3%B5es-de-mapeamento/"> Anotações de Mapeamento </a></h2>

<strong>@Entity</strong>
Usada para especificar que a classe anotada atualmente representa um tipo de entidade.

<strong>@Table</strong>
Usada para especificar a tabela principal da entidade atualmente anotada.

<strong>@Id</strong>
Especifica o identificador da entidade. Uma entidade deve sempre ter um atributo identificado.

<strong>@GeneratedValue</strong>
Especifica que o valor do identificador de entidade é gerado automaticamente.

<strong>@Column</strong>
Usada para especificar o mapeamento entre um atributo de entidade básico e a coluna da tabela de banco de dados.

<strong>@JoinColumn</strong>
Usada para especificar a coluna FOREIGN KEY. Indica que a entidade é a responsável pelo relacionamento.

<strong>@OneToMany</strong>
Usada para especificar um relacionamento de banco de dados um-para-muitos.

<strong>@OneToOne</strong>
Usada para especificar um relacionamento de banco de dados um-para-um.

<strong>@ManyToOne</strong>
Usada para especificar um relacionamento de banco de dados muitos-para-um.

<strong>cascade</strong>
Realizar operações em cascata só faz sentido em relacionamentos Pai - Filho.

<strong>mappedBy</strong>
Indica qual é o lado inverso ou não dominante da relação.
