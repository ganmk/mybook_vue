<template>
	 <div class="block"> 
	 <el-table
	      :data="bookData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
		  v-loading="loading"
	      style="width: 100%">
	      </el-table-column>
	      <el-table-column
	        prop="bookname"
	        label="书名"
	        style="width: 100%">
	      </el-table-column>
	      <el-table-column
	        prop="bookauthor"
	        label="作者"
			style="width: 100%">
	      </el-table-column>
		  <el-table-column
		    prop="bookprice"
		    label="价格"
		    style="width: 100%">   
			</el-table-column>
	    </el-table>
		 
 
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page.sync="currentPage"
				:page-sizes="[10, 20, 30, 40]"
				layout="total, sizes, prev, pager, next, jumper" 
				:page-size="pagesize"
				:total="total"
				background>
			</el-pagination>
		<!-- 	<el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="currentPage"
			      :page-sizes="[10, 20, 30, 40]"
			      :page-size="10"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="16">
			    </el-pagination> -->
				
		</div>
</template>

<script>
 
	export default {
	    name: "book_search",
	    data(){
	        return{
	           bookData:[],
				currentPage:1,
			   	pagesize:10,
				loading: false,
				total:0
	        }
	    },
		methods:{
		   handleSizeChange(val) {
		    this.pagesize = val;
		      //        console.log(`每页 ${val} 条`);
		  },
		  handleCurrentChange(val) {
		    this.currentPage = val;
		  },
		  initBook(){
			   this.loading = true;
			   let url="/book/basic/";
			   this.getRequest(url).then(resp => {
			                      this.loading = false;
			                      if (resp) {
									  console.log(resp);
			                          this.bookData=resp.data;
									  this.total=parseInt(resp.data.length);
									  console.log(resp.data.length);
									  console.log(this.bookData);
			                          //this.total = resp.total;
			                      }
			                  });
		  }
		},
		mounted() {
			console.log("这里走了吗start");
            this.initBook();
			console.log("这里走了吗end");
        }, 
	}
</script>

<style>
</style>
