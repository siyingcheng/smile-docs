import{_ as e,D as n,c as h,m as t,a as i,I as a,U as l,o as k}from"./chunks/framework.BVbjJPPA.js";const N=JSON.parse('{"title":"JOIN","titleTemplate":"SQL","description":"SQL JOIN","frontmatter":{"title":"JOIN","titleTemplate":"SQL","description":"SQL JOIN","head":[["meta",{"name":"description","content":"SQL JOIN"}]],"tags":["SQL"],"categories":["Notes"]},"headers":[],"relativePath":"notes/sql/JOIN.md","filePath":"notes/sql/JOIN.md","lastUpdated":1705026131000}'),p={name:"notes/sql/JOIN.md"},r={id:"join",tabindex:"-1"},d=t("a",{class:"header-anchor",href:"#join","aria-label":'Permalink to "JOIN <Badge type="tip" text="SQL" /><Badge type="warning" text="Notes" />"'},"​",-1),o=l(`<p>A <code>JOIN</code> clause is used to combine rows from two or more tables, based on a related column between them.</p><p>Different type of SQL JOINs:</p><p>Here are the different types of the JOINs in SQL:</p><ul><li><code>(INNER) JOIN</code>: Returns records that have matching values in both tables.</li><li><code>LEFT (OUTER) JOIN</code>: Returns all records from the left table, the the matched records from the right table.</li><li><code>RIGHT (OUTER) JOIN</code>: Returns all records from the right table, and the matched records from the left table.</li><li><code>FULL (OUTER) JOIN</code>: Returns all records when there is a match in either left or right table.</li></ul><h2 id="inner-join" tabindex="-1">INNER JOIN <a class="header-anchor" href="#inner-join" aria-label="Permalink to &quot;INNER JOIN&quot;">​</a></h2><p><code>(INNER) JOIN</code>: Selects all rows from both the tables as long as the condition is satisfied. Creates the result-set by combining all rows from both the tables where the condition satisfied i.e value of the common filed will be the same. <img src="https://www.w3schools.com/sql/img_inner_join.png" alt="INNER JOIN"></p><details class="details custom-block"><summary>Click to view examples</summary><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> car</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">car_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> car</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">first_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">make</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">price</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person p</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INNER JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> car c</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">car_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- If both table have the same column \`car_id\` can use USING</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> car </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">USING</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (car_id);</span></span></code></pre></div></details><h2 id="left-join" tabindex="-1">LEFT JOIN <a class="header-anchor" href="#left-join" aria-label="Permalink to &quot;LEFT JOIN&quot;">​</a></h2><p><code>LEFT JOIN</code>: Returns all the rows of the table on the left side of the join and matched rows for the table on the right side of the join. For the rows for which there is no matching row on the right side, the result-set will contain <em><code>NULL</code></em>. LEFT JOIN is also known as <code>LEFT OUTER JOIN</code>. <img src="https://www.w3schools.com/sql/img_left_join.png" alt="LEFT JOIN"></p><details class="details custom-block"><summary>Click to view examples</summary><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person p</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LEFT JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> car c</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">car_id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person p</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LEFT JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> car c</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">car_id</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> IS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div></details><h2 id="right-join" tabindex="-1">RIGHT JOIN <a class="header-anchor" href="#right-join" aria-label="Permalink to &quot;RIGHT JOIN&quot;">​</a></h2><p><code>RIGHT JOIN</code>: RIGHT JOIN is similar to LEFT JOIN. Returns all the rows of the table on the right side of the join and matching rows for the table on the left side of the join. For the rows for which there is no matching row ont he left side, the result-set will contain <em><code>NULL</code></em>. RIGHT JOIN is also known as <code>RIGHT OUTER JOIN</code>.</p><p><img src="https://www.w3schools.com/sql/img_right_join.png" alt="RIGHT JOIN"></p><details class="details custom-block"><summary>Click to view examples</summary><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Student</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NAME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">StudentCourse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">COURSE_ID</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Student</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RIGHT JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> StudentCourse</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> StudentCourse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ROLL_NO</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Student</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ROLL_NO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div></details><h2 id="full-outer-join" tabindex="-1">FULL OUTER JOIN <a class="header-anchor" href="#full-outer-join" aria-label="Permalink to &quot;FULL OUTER JOIN&quot;">​</a></h2><p><code>FULL JOIN</code>: Creates the result-set by combining results of both LEFT JOIN and RIGHT JOIN. The result-set will contain all the rows from both tables. For the rows for which there is no matching, the result-set will contain <em><code>NULL</code></em> values.</p><p><img src="https://www.w3schools.com/sql/img_full_outer_join.png" alt="FULL OUTER JOIN"></p><details class="details custom-block"><summary>Click to view examples</summary><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Student</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NAME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">StudentCourse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">COURSE_ID</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Student</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FULL JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> StudentCourse</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> StudentCourse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ROLL_NO</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Student</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ROLL_NO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div></details>`,18);function E(c,g,y,F,C,m){const s=n("Badge");return k(),h("div",null,[t("h1",r,[i("JOIN "),a(s,{type:"tip",text:"SQL"}),a(s,{type:"warning",text:"Notes"}),i(),d]),o])}const O=e(p,[["render",E]]);export{N as __pageData,O as default};
