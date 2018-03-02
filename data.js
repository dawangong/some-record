			// respones data:
			var Items = {
			    currentPage: 1,
			    pageSize: 20,
			    totalPage: 1,
			    totalCount: 1,
			    data: [{
			        id: '主键',
			        name: '名称',
			        order: '排序',
			        status: '状态',
			        // 0其他, 1在售
			        created: '创建时间',
			        modified: '更改时间',
			        lastSync: '同步时间',
			        shopId: '店铺ID',
			        picUrl: '商品图片',
			        detailUrl: '商品详情',
			        outerId: '商品商家编码',
			        price: '商品价格',
			        quantity: '商品库存',
			        listTime: '上架时间',
			        delistTime: '下架时间',
			        tags: [
			            '标签'
			        ],
			        props:
			            // 商品属性
			            [{
			                pid: '属性ID',
			                pname: '属性名称',
			                vid: '属性值ID',
			                vname: '属性值名称'
			            }],
			        categories:
			            // 标准类目
			            [{
			                cid: '类目ID',
			                cname: '类目名称'
			            }],
			        shopCategories:
			            // 自定义类目
			            [{
			                cid: '类目ID',
			                cname: '类目名称'
			            }],
			        skus: [{
			            id: '主键',
			            name: '名称',
			            order: '排序',
			            status: '状态',
			            // 0其他, 1在售
			            created: '创建时间',
			            modified: '更改时间',
			            lastSync: '同步时间',
			            outerId: '商品商家编码',
			            price: '商品价格',
			            quantity: '商品库存',
			            picUrl: '商品图片',
			            props:
			                // 商品属性
			                [{
			                    pid: '属性ID',
			                    pname: '属性名称',
			                    vid: '属性值ID',
			                    vname: '属性值名称'
			                }]
			        }]
			    }]
			};

			var Category = {
			    id: '主键',
			    name: '名称',
			    order: '排序',
			    status: '状态',
			    //0, 1
			    created: '创建时间',
			    modified: '更改时间',
			    lastSync: '同步时间',

			    shopId: '店铺',
			    pid: '上级类目',
			    level: '级别',
			    //1,2,3
			    isLeaf: '是否叶子节点',
			    //0, 1
			};

			var Property = {
			    id: '主键',
			    name: '名称',
			    order: '排序',
			    status: '状态',
			    //0, 1
			    created: '创建时间',
			    modified: '更改时间',
			    lastSync: '同步时间',

			    type: '类型',
			    categoryId: '类目',
			    ppid: '上级属性',
			    ppvid: '上级属性值',

			    values: [{
			        id: '主键',
			        name: '名称',
			        order: '排序',
			        status: '状态',
			        //0, 1
			        created: '创建时间',
			        modified: '更改时间',
			        lastSync: '同步时间',

			        alias: '别名',
			    }]

			};