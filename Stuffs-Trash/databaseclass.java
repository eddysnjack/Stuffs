package com.dijibil.islemler;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Malatyali
 */
public class Database {
    String URL="jdbc:mysql://localhost:3304/muh_tasarim";
    String USERNAME="root";
    String PASSWORD="";
    Connection baglanti;
    public Database () throws ClassNotFoundException, SQLException{
       Class.forName("com.mysql.jdbc.Driver"); //driver varmý diye bakýyoruz
       baglanti=(Connection) DriverManager.getConnection(URL,USERNAME,PASSWORD);
       
    }
    public boolean kaydet(String _sorgu){
        boolean durum=false;
        try{
          PreparedStatement kaydet=baglanti.prepareStatement(_sorgu);
          kaydet.executeUpdate();
          durum=true;
          baglanti.close();
        }
        catch(SQLException e){
            durum=false;
        }
        return durum;
    }
        public ResultSet kayitGetir(String _sorgu){
            ResultSet result=null;
            try{
                java.sql.Statement sorgu=baglanti.createStatement();
                result=sorgu.executeQuery(_sorgu);
            }catch(SQLException ex){
                
            }
        
        return result;
            
        }
    
}
