import{_ as e,E as t,c as l,m as n,a as i,J as a,V as p,o as h}from"./chunks/framework.NnQCR_Xz.js";const A=JSON.parse('{"title":"PostgreSQL Commands","titleTemplate":"SQL","description":"PostgreSQL Commands","frontmatter":{"title":"PostgreSQL Commands","titleTemplate":"SQL","description":"PostgreSQL Commands","head":[["meta",{"name":"description","content":"PostgreSQL Commands"}]],"tags":["SQL"],"categories":["Notes"]},"headers":[],"relativePath":"notes/sql/PostgreSQL-commands.md","filePath":"notes/sql/PostgreSQL-commands.md","lastUpdated":1706081324000}'),d={name:"notes/sql/PostgreSQL-commands.md"},o={id:"postgresql-commands",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#postgresql-commands","aria-label":'Permalink to "PostgreSQL Commands <Badge type="tip" text="SQL" /><Badge type="warning" text="Notes" />"'},"​",-1),c=p(`<h2 id="database-interaction-commands" tabindex="-1">Database Interaction Commands <a class="header-anchor" href="#database-interaction-commands" aria-label="Permalink to &quot;Database Interaction Commands&quot;">​</a></h2><ul><li><code>\\q</code>: Exit the PostgreSQL client.</li><li><code>\\h command_name</code>: Get help on a specific command.</li><li><code>?</code>: List all available commands.</li><li><code>\\password</code>: Change your password.</li><li><code>\\c db_name</code>: Connect to a specific database.</li><li><code>\\l</code>: List available databases.</li><li><code>\\dt</code>: List tables in the current database.</li><li><code>\\d table_name</code>: Describe table, shows the structure of a table, including column names, data types, and constraints.</li><li><code>\\du</code>: List users and their roles.</li><li><code>\\df</code>: List all available functions in the current database.</li><li><code>\\sf function_name</code>: Show the definition of a specific function.</li><li><code>\\x</code>: Toggles between expanded and no-expanded output for query results, making it easier to read.</li><li><code>\\i sql_file_path</code>: Executes batch SQL commands from file. Example: <code>\\i /Volumes/Data/download/person.sql</code></li><li><code>\\copy sql_statement TO output_file_path</code>: Performs SQL COPY with data stream to the client host. Example:</li></ul><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\\</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LEFT JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> car </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> car</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">car_id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/Volumes/Data/download/person-car-left-join.csv&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DELIMITER </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;,&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CSV HEADER;</span></span></code></pre></div><h2 id="extensions" tabindex="-1">Extensions <a class="header-anchor" href="#extensions" aria-label="Permalink to &quot;Extensions&quot;">​</a></h2><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EXTENSION </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">IF</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> NOT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> EXISTS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;uuid-ossp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pg_available_extensions </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;uuid-ossp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- \\df to list functions</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- test=&gt; \\df</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                 List of functions</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Schema |        Name        | Result data type |    Argument data types    | Type</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">----------+--------------------+------------------+---------------------------+------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- public | uuid_generate_v1   | uuid             |                           | func</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- public | uuid_generate_v1mc | uuid             |                           | func</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- public | uuid_generate_v3   | uuid             | namespace uuid, name text | func</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- public | uuid_generate_v4   | uuid             |                           | func</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- public | uuid_generate_v5   | uuid             | namespace uuid, name text | func</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- public | uuid_nil           | uuid             |                           | func</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- public | uuid_ns_dns        | uuid             |                           | func</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- public | uuid_ns_oid        | uuid             |                           | func</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- public | uuid_ns_url        | uuid             |                           | func</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- public | uuid_ns_x500       | uuid             |                           | func</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uuid_generate_v4();</span></span></code></pre></div>`,5);function r(u,g,E,m,y,_){const s=t("Badge");return h(),l("div",null,[n("h1",o,[i("PostgreSQL Commands "),a(s,{type:"tip",text:"SQL"}),a(s,{type:"warning",text:"Notes"}),i(),k]),c])}const b=e(d,[["render",r]]);export{A as __pageData,b as default};