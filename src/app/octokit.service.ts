import { Injectable } from '@angular/core';
import { Octokit } from "octokit"
import { GitUser } from 'src/models/gituser.model';
@Injectable({
  providedIn: 'root'
})
export class OctokitService {
  octokit;
  responseBody: any;
  isNoResults: boolean = false
  constructor() {
    this.octokit = new Octokit({ 
      auth: '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',
    });
  }

  public async callGitHub(name: string) {
    try {
      this.responseBody = await this.octokit.request(`GET /users/${name.toLowerCase().replace(/\s/g, '')}`, {})
      this.isNoResults = false
    } catch (error) {
      this.isNoResults = true
    }
    this.storeHistory(name)
  }

  public storeHistory(name: string) {
    let history = this.getHistory()
    let newEntry = {
      name: this.responseBody?.data.name,
      avatar_url: this.responseBody?.data.avatar_url,
      input: name,
      isNoResults: this.isNoResults
    }
    if (history.filter((elem) => elem.input === name).length === 0) {
      history.push(newEntry)
    }
    localStorage.setItem('history', JSON.stringify(history))
  }

  public getHistory() {
    let storedData = localStorage.getItem('history')
    return storedData ? JSON.parse(storedData ? storedData : '') as GitUser[] : []
  }

  public getResponse() {
    return this.responseBody?.data
  }

  public clear() {
    localStorage.setItem('history', '')
  }
}
