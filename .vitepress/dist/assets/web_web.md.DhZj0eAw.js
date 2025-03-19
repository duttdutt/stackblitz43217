import{_ as a,i as n,o as i,am as e}from"./chunks/framework.Cg7l08Gd.js";const c=JSON.parse('{"title":"Test","description":"","frontmatter":{},"headers":[],"relativePath":"web/web.md","filePath":"web/web.md"}'),t={name:"web/web.md"};function B(l,s,p,h,r,k){return i(),n("div",null,s[0]||(s[0]=[e(`<h1 id="test" tabindex="-1">Test <a class="header-anchor" href="#test" aria-label="Permalink to &quot;Test&quot;">​</a></h1><h2 id="test-1" tabindex="-1">Test <a class="header-anchor" href="#test-1" aria-label="Permalink to &quot;Test&quot;">​</a></h2><h3 id="test-2" tabindex="-1">Test <a class="header-anchor" href="#test-2" aria-label="Permalink to &quot;Test&quot;">​</a></h3><h4 id="test-3" tabindex="-1">Test <a class="header-anchor" href="#test-3" aria-label="Permalink to &quot;Test&quot;">​</a></h4><p>Rerum <code>dolor aspernatur</code> iusto dicta voluptatum.</p><div class="language-javascript vp-adaptive-theme"><button title="Test" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes vp-code" style="--shiki-light:#bbbbbb;--shiki-dark:#bbbbbb;--shiki-light-bg:#1e1e1e;--shiki-dark-bg:#1e1e1e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">export function arrayUnique(array) {</span></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">  return Array.from(new Set(array));</span></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">export function isTesting() {</span></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">  return (</span></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">    navigator.userAgent,</span></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">    navigator.userAgent.includes(</span><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">&quot;Node.js&quot;</span><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">) ||</span></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">      navigator.userAgent.includes(</span><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">&quot;jsdom&quot;</span><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">)</span></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">  );</span></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">export function kebabCase(subject) {</span></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">  return subject.replace(</span><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">/([a-z])([A-Z])/g</span><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">, </span><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">&quot;$1-$2&quot;</span><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">);</span></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">function findAges(data, age1, age2) {</span></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">  const result = [];</span></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">  let nearestAge = null;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">  for (let i = 0; i &lt; data.length; i++) {</span></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">    const currentAge = data[i].age;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">    if (currentAge &lt; age1) {</span></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">      if (nearestAge === null || currentAge &gt; nearestAge)</span></span>
<span class="line"><span style="--shiki-light:#8A8A8A;--shiki-dark:#BBBBBB;">        // запоминаем, если тек. больше ближ.</span></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">        nearestAge = currentAge;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">      continue;</span></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">    if (currentAge &gt; age2) break;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">    result.push(currentAge);</span></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">  return result;</span></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">const data = [{ age: 10 }, { age: 15 }, { age: 16 }, { age: 20 }, { age: 21 }];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">console.log(findAges(data, 11, 13));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000;--shiki-dark:#BBBBBB;">export default data;</span></span></code></pre></div><p><em>Directives</em> are commands you send to the assembler to do things like locating code in memory. They start with . and are indented. This sample directive tells the assembler to put the code starting at memory location $8000, which is inside the game ROM area. <strong>Labels</strong> are aligned to the far left and have a : at the end. The label is just something you use to organize your code and make it easier to read. The assembler translates the label into an address.</p>`,7)]))}const o=a(t,[["render",B]]);export{c as __pageData,o as default};
