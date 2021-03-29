<template>
	<div >
		 <div>
		 
			
		 <el-row :gutter="20" style="text-align: left;top:10px;"> 
		 <el-button    @click="addbookRank()">新增</el-button>
		 </el-row>
				 
			   <div  v-for="(value, index) in bookRankData.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index">  <!-- :offset="index > 0 ? 2 : 0" -->
			    
				  <el-row>
				 <el-col :span="4">
			      <img :src="value.producturl" style="display: inline-block;" class="image">
			       
				   </el-col>	
					<el-col :span="16">
						<div style="padding: 14px; ">
						  <span>{{ value.word }}</span>
						  <div class="bottom clearfix">
						    <time class="time">描述:{{ value.productname }}</time>
						  </div>
						</div>
					</el-col>
					<el-col :span="4">
						<el-button  @click=""   >编辑</el-button>
						<el-button  @click=""   >详情</el-button>
				 </el-col>
			      </el-row>
			   </div>
			
			 
		</div>
		<el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="currentPage"
		      :page-size="5"
		      layout="total, prev, pager, next"
		      :total="total">
		    </el-pagination>
			
			<el-dialog title="新增" :visible.sync="dialogFormVisible">
			  <el-form :model="form">
			    <el-form-item label="图书名称" :label-width="formLabelWidth">
			      <el-input v-model="form.word" auto-complete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="Url" :label-width="formLabelWidth">
			     <el-input v-model="form.producturl" auto-complete="off"></el-input>
			    </el-form-item>
				<el-form-item label="描述" :label-width="formLabelWidth">
				 <el-input v-model="form.productname" auto-complete="off"></el-input>
				</el-form-item>
			  </el-form>
			  <div slot="footer" class="dialog-footer">
			    <el-button @click="dialogFormVisible = false">取 消</el-button>
			    <el-button type="primary" @click="submitAddRank()">确 定</el-button>
			  </div>
			</el-dialog>
	</div>
</template>

<script>
	import axios from 'axios'
	var  book_rankData //= require( '../../data/book_rank.json' )
	export default {
	    name: "book_rank1",
	    data(){
	        return{
			    dialogFormVisible: false,
	            bookRankData:[],
				currentPage:1,
			   	pagesize:5,
				loading: false,
				total:0,
				form: {
				          word: '',
				          productname: '',
				          producturl: ''
				        },
				 formLabelWidth: '120px'
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
		  submitAddRank(){
			  this.dialogFormVisible = false;
			  this.postRequest("/book/rank/add", this.form).then(resp => {
			 
			      if (resp) {
			          this.form.word = '';
			          this.form.productname = '';
					  this.form.producturl = '';
			          this.initBook();
					  
			      }
			  })
		  },
		 addbookRank(){
			this.dialogFormVisible=true;
			 
		 },
		  initBook () {
		                  let url="/book/rank/GetRankBooks";
			   this.getRequest(url).then(resp => {
			                      this.loading = false;
			                      if (resp) {
									  console.log(resp);
			                          this.bookRankData=resp.data;
									  this.total=parseInt(resp.data.length);
									  console.log(resp.data.length);
									  console.log(this.bookRankData);
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
	 .el-row {
	    margin-bottom: 20px;
	    &:last-child {
	      margin-bottom: 0;
	    }
	  }
	  
	 .time {
	     font-size: 13px;
	     color: #999;
	   }
	   
	   .bottom {
	     margin-top: 13px;
	     line-height: 12px;
	   }
	 
	   .button {
	     padding: 0;
	     float: right;
	   }
	 
	   .image {
	     width: 100%;
	     display: block;
	   }
	 
	   .clearfix:before,
	   .clearfix:after {
	       display: table;
	       content: "";
	   }
	   
	   .clearfix:after {
	       clear: both
	   }
	   
	    .el-carousel__item h3 {
	       color: #475669;
	       font-size: 14px;
	       opacity: 0.75;
	       line-height: 150px;
	       margin: 0;
	     }
	   
	     .el-carousel__item:nth-child(2n) {
	        background-color: #99a9bf;
	     }
	     
	     .el-carousel__item:nth-child(2n+1) {
	        background-color: #d3dce6;
	     }
</style>
