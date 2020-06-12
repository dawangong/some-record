import { template1, template2, template3 } from './package/template';

// 模拟数据
const users = [{"name": "Kevin", "url": "http://localhost"}];

const tpl = `<%for ( var i = 0; i < users.length; i++ ) { %>
    <li>
        <a href="<%=users[i].url%>">
            <%=users[i].name%>
        </a>
    </li>
<% } %>`;

const compiled = template3(tpl);

document.querySelector('#result').innerHTML = compiled(users);
