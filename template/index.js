import { template1, template2, template3 } from './package/template';

// 模拟数据
const users = [{"name": "Kevin", "url": "http://www.baidu.com"}, {"name": "Bob", "url": "http://www.baidu.com"}, {"name": "Dav", "url": "http://www.baidu.com"}];

const tpl = `<%for ( var i = 0; i < users.length; i++ ) { %>
    <li>
        <a href="<%=users[i].url%>">
            <%=users[i].name%>
        </a>
    </li>
<% } %>`;

const tpl2 = `<%=users[0].name%>`;

const compiled = template3(tpl);
const compiled2 = template3(tpl2);

document.querySelector('#result').innerHTML = compiled(users);
// document.querySelector('#result').innerHTML = compiled2(users);
