<template>
	<div >
		 <div>
		 
			 
			 <el-row>
			   <el-col :span="8" v-for="(value, index) in bookRankData.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index">  <!-- :offset="index > 0 ? 2 : 0" -->
			     <el-card :body-style="{ padding: '0px' }">
					<!-- <el-carousel height="150px">
					       <el-carousel-item v-for="item in value.products" :key="item">
					        <img :src="item.imgUrl" class="image">
					       </el-carousel-item>
					     </el-carousel> -->
						 
			      <img :src="value.products[0].imgUrl" class="image">
			       <div style="padding: 14px;">
			         <span>{{ value.word }}</span>
			         <div class="bottom clearfix">
			           <time class="time">rank:{{ value.rank }}</time>
			         </div>
			       </div>
			     </el-card>
			   </el-col>
			 </el-row>
			 
		</div>
		<el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="currentPage"
		      :page-size="5"
		      layout="total, prev, pager, next"
		      :total="total">
		    </el-pagination>
			
	</div>
</template>

<script>
	import axios from 'axios'
	var  book_rankData = require( '../../data/book_rank.json' )
	export default {
	    name: "book_rank",
	    data(){
	        return{
	           bookRankData:[],
				currentPage:1,
			   	pagesize:5,
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
		 
		  initBook () {
		                
		                var  result = book_rankData.data
						this.bookRankData=book_rankData.data;
						this.total=parseInt(book_rankData.data.length);
						console.log(book_rankData.data.length);
						console.log(this.bookRankData);
						let tempsql;
		                /* for (let _item in this.bookRankData) {
			  //console.log(_item);
			  if(this.bookRankData[_item].products.length>0){
		  	                 tempsql+=`INSERT INTO book_rank
	(word, productName, productUrl, productText)
	VALUES ( '${this.bookRankData[_item].word}', '${this.bookRankData[_item].products[0].productName}', '${this.bookRankData[_item].products[0].imgUrl}', '');`;
	}
						} */
		               console.log(tempsql);
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
