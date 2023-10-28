package com.npci.service;

import java.util.List;

import com.npci.beans.Customer;
import com.npci.beans.Loan;
import com.npci.beans.LoanApplicationService;

public interface LoanService {
	
	List<LoanApplicationService> viewLoans();
	String loanStatus(int loan_id);
	LoanApplicationService applyLoan(Customer customer, Loan loan);
	
}
